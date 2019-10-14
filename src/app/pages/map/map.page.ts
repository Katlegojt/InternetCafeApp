import { Component, OnInit, NgZone } from '@angular/core';
// import { AgmCoreModule } from '@agm/core';
import { GeoFirestore, GeoCollectionReference, GeoQuery, GeoQuerySnapshot } from 'geofirestore';

import { GeoService } from 'src/app/services/geo.service';
import * as firebase from 'firebase'
import * as firebaseApp from 'firebase/app';
import * as geofirex from 'geofirex';
import {Location, Appearance} from '@angular-material-extensions/google-maps-autocomplete';
import { Observable, BehaviorSubject } from 'rxjs';

declare var google;

import 'firebase/firestore';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],

})

export class MapPage implements OnInit {
  title = 'Internet Cafe location';
  lat;
  lng;
  map;
  geolocation
  markers: any;
  input;
  GoogleAutocomplete;
  autocomplete;
  autocompleteItems;
  dbRef: any;

  items: any[];

  geocoder = new google.maps.Geocoder;
  hits = new BehaviorSubject([]);
  pointList:any;
  appearance = Appearance;
  points: Observable<any>;
  geo = geofirex.init(firebaseApp);

  constructor(private geoS: GeoService, private zone: NgZone) {
    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.autocomplete = { input: '' };
    this.autocompleteItems = [];
  

    this.markers = [];
    const firestore = firebase.firestore();
    const geofirestore: GeoFirestore = new GeoFirestore(firestore);
    const geocollection: GeoCollectionReference = geofirestore.collection('internetCafe');

    // Create a GeoQuery based on a location
    const query: GeoQuery = geocollection.near({ center: new firebase.firestore.GeoPoint(40.7589, -73.9851), radius: 1000 });

    // Get query (as Promise)
    query.get().then((value: GeoQuerySnapshot) => {

      // All GeoDocument returned by GeoQuery, like the GeoDocument added above
      console.log(value.docs);
    });
  }



  ionViewDidEnter() {
    //Set latitude and longitude of some place
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: -25.7479, lng: 28.2293 },
      zoom: 15
    });
  }

  ngOnInit() {
    //this.getUSerLocation();
    this.tryGeolocation();
    this.map = new google.maps.Map(document.getElementById('map'));
    this.geo.collection('internetCafe').snapshot().subscribe(data =>{

      data.forEach(item=>{
        console.log(item.data().position.geohash);
        let marker = new google.maps.Marker({
          position: item.data().position.geoPoint,
          map: this.map,
        });

        this.markers.push(marker);
        console.log(this.markers);
      })
    });
  }
  //markerDraggable 
  markerDragEnd(event) {
    console.log(event);
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;

  }

  //get users current location
  private getUSerLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.geoS.getLocations(500, [this.lat, this.lng])
      })

    }
  }

  //////////////////////////////////////////
  //code from Ionic Themes

  updateSearchResults() {
    if (this.autocomplete.input == '') {
      this.autocompleteItems = [];
      return;
    }
    let options = {
      input: this.autocomplete.input,
      types: ['(regions)']
    }
    this.GoogleAutocomplete.getPlacePredictions(options,
      (predictions, status) => {
        this.autocompleteItems = [];
        if (predictions) {
          this.zone.run(() => {
            predictions.forEach((prediction) => {
              this.autocompleteItems.push(prediction);
            });
          });
        }
      });
  }
  selectSearchResult(item) {
    // this.clearMarkers();
    this.autocompleteItems = [];
    this.geocoder.geocode({ 'placeId': item.place_id }, (results, status) => {
      if (status === 'OK' && results[0]) {
        let position = {
          lat: results[0].geometry.location.lat,
          lng: results[0].geometry.location.lng
        };
        // let marker = new google.maps.Marker({
        //   position: results[0].geometry.location,
        //   map: this.map,
        // });
        //this.markers.push(marker);
        this.map.setCenter(results[0].geometry.location);
      }
    })
  }
  tryGeolocation() {
    //this.clearMarkers();
    navigator.geolocation.getCurrentPosition((resp) => {
      let pos = {
        lat: resp.coords.latitude,
        lng: resp.coords.longitude
      };
      let marker = new google.maps.Marker({
        position: pos,
        map: this.map,
        title: 'I am here!',

      });
      this.markers.push(marker);
      this.map.setCenter(pos);
    })
  }

}
