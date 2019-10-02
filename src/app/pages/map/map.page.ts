import { Component, OnInit,NgZone} from '@angular/core';
// import { AgmCoreModule } from '@agm/core';
import { GeoFire } from 'geofire';
import { GeoService } from 'src/app/services/geo.service';
import * as firebase from 'firebase'
import { BehaviorSubject } from 'rxjs';
declare var google;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
  
})

export class MapPage implements OnInit {
  title = 'Internet Cafe location';
  lat ;
  lng ;
  map;
  geocoder;
  geolocation
  markers: any;
  input;
  GoogleAutocomplete;
  autocomplete;
  autocompleteItems
  dbRef: any;
  geoFire: any;
  items: any[];

  hits = new BehaviorSubject([]);
  
  constructor( private geo: GeoService, private zone: NgZone) { 
    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.autocomplete = { input: '' };
    this.autocompleteItems = [];
    this.geocoder = new google.maps.Geocoder;
    this.markers = [];

    
    var firebaseRef = firebase.database().ref('list')
     this.geoFire = new GeoFire(firebaseRef);

    firebaseRef.on('value', resp =>{
      
      this.items = snapshoptToArray(resp);
      console.log('hello' + this.items);
      });

  
      const snapshoptToArray = snapshot =>{
        let returnArray = [];
        snapshot.forEach(element => {
          let item = element.val();
          item.key = element.key;
          returnArray.push(item)
        });
        return returnArray;
        
      }


  }

  ionViewDidEnter(){
    //Set latitude and longitude of some place
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: -25.7479, lng: 28.2293 },
      zoom: 15
    });
  }

  ngOnInit() {
 this.getUSerLocation();
//this.tryGeolocation();
    
  }
  //markerDraggable 
  markerDragEnd(event) {
    console.log(event);
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
  
  }
  
  //get users current location
  private getUSerLocation(){
    
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;

        this.getLocations(500, [this.lat, this.lng])
        

      })
   
    }
  }

  
//on click for map
  onClickLocation(event){
   this.geo.setLocation('locations', [event.coords.lat, event.coords.lng]);
    console.log(event);
  }

//////////////////////////////////////////
//code from Ionic Themes


updateSearchResults(){
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
  if(predictions){
  this.zone.run(() => {
  predictions.forEach((prediction) => {
  this.autocompleteItems.push(prediction);});
  });
  }
  });
  }
selectSearchResult(item){
  // this.clearMarkers();
  this.autocompleteItems = [];

  this.geocoder.geocode({'placeId': item.place_id}, (results, status) => {
    if(status === 'OK' && results[0]){
      let position = {
          lat: results[0].geometry.location.lat,
          lng: results[0].geometry.location.lng
      };
      // let marker = new google.maps.Marker({
     //position: results[0].geometry.location,
      //   map: this.map,
      // });
      // this.markers.push(marker);
      this.map.setCenter(results[0].geometry.location);
    }
  })
}
tryGeolocation(){
  //this.clearMarkers();
  this.geolocation.getCurrentPosition().then((resp) => {
    let pos = {
      lat: resp.coords.latitude,
      lng: resp.coords.longitude
    };
    let marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      title: 'I am here!'
    });
    this.markers.push(marker);
    this.map.setCenter(pos);
  }).catch((error) => {
    console.log('Error getting location', error);
  });
}

getLocations(radius: number, coords: Array<number>) {
  this.geoFire.query({ center: coords, 
    radius: radius })
    .on('key_entered', (key, location, distance) => {

    let hit = {
      location: location, 
      distance: distance
    }

    let currentHits = this.hits.value
    currentHits.push(hit)
    this.hits.next(currentHits)
  })

}

}
