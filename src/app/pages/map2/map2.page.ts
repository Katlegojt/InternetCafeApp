import { Component, OnInit} from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import * as firebaseApp from 'firebase/app';
import * as geofirex from 'geofirex';
import {Location, Appearance} from '@angular-material-extensions/google-maps-autocomplete';

import PlaceResult = google.maps.places.PlaceResult;
import { AlertController } from '@ionic/angular';
import { GeoService } from 'src/app/services/geo.service';
import { GeoPoint } from '@firebase/firestore-types';


@Component({
  selector: 'app-map2',
  templateUrl: './map2.page.html',
  styleUrls: ['./map2.page.scss'],
})
export class Map2Page implements OnInit {

  pointList:any;
  appearance = Appearance;
  points: Observable<any>;
  geo = geofirex.init(firebaseApp);
  //radius = new BehaviorSubject(0.5);
  
  
  latitude ;
  longitude ;
  geocoder = new google.maps.Geocoder;
  active: boolean = false;
  
  address: any = {};
  


  constructor(public alertController: AlertController, private geoservice : GeoService)  { 

    //  const point = this.geo.point(-25.782823,28.2749065);
    //  const cities = this.geo.collection('internetCafe');
    //   cities.add({ name: 'Phoenix33', position: point.data });


   //this.geoservice.setALocation(-25.782823,28.2749065);
   
    this.pointList=[];

    // const center = this.geo.point(-25.7479, -28.2293)
    // const radius = new BehaviorSubject(0.5);
    
    // this.points = radius.pipe(
    //   switchMap(radius => {
    //     return this.geo.collection('internetCafe').within(center, 0.5, 'position');
    //   })
    // );
 
   
  }
 

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(position => {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
    })
   

    this.geo.collection('localCafe').snapshot().subscribe(data =>{

      data.forEach(item=>{
        //console.log(item.data().position.geohash);

        this.pointList.push(item.data());

        console.log(this.pointList);
      })
    });
    
  }

  update(v) {
    //this.radius.next(v);
  }

  onAutocompleteSelected(result: PlaceResult) {
    console.log('onAutocompleteSelected: ', result);
  }
  onLocationSelected(location: Location) {
    console.log('onLocationSelected: ', location);
    this.latitude = location.latitude;
    this.longitude = location.longitude;
   
  }
  placeMarker(event){
    console.log(event.coords.lat);
    console.log(event.coords.lng);
    console.log(event);
   
  }


}
