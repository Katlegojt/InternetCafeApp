import { Component, OnInit} from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import * as firebaseApp from 'firebase/app';
import * as geofirex from 'geofirex';
import {Location, Appearance} from '@angular-material-extensions/google-maps-autocomplete';

import PlaceResult = google.maps.places.PlaceResult;
import { AlertController, NavController } from '@ionic/angular';
import { GeoService } from 'src/app/services/geo.service';
import { GeoPoint } from '@firebase/firestore-types';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-map2',
  templateUrl: './map2.page.html',
  styleUrls: ['./map2.page.scss'],
})
export class Map2Page implements OnInit {

  iconurl ='assets/favicon-96x96-removebg-preview.png'
  pointList:any;
  appearance = Appearance;
  points: Observable<any>;
  geo = geofirex.init(firebaseApp);
  //radius = new BehaviorSubject(0.5);
  
  
  latitude ;
  longitude ;
  geocoder = new google.maps.Geocoder;
  active: boolean = false;
  dir ;
  address: any = {};
  
  point1: 51.507351;
  point2: -0.127758;
  lati: any;
  longi: any;
  key: any;

  constructor(public alertController: AlertController,
     private geoservice : GeoService,
     private navCtrl: NavController,
     public afAuth: AngularFireAuth,private route: Router,
     private router: ActivatedRoute,
     private db: AngularFirestore
    )  { 

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

    this.router.queryParams
    .subscribe(params => {
       
      this.key = params.key;
      console.log(this.key); // popular
    });

   

    if(this.key == null) {
      navigator.geolocation.getCurrentPosition(position => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
      })

    }
    else{

      this.db.collection("localCafe").doc(this.key)
      .get().subscribe((doc)  =>{
       
          console.log("Document data:", doc.data());
          this.latitude= doc.data().position.geopoint.latitude;
          this.longitude = doc.data().position.geopoint.longitude;
      });

    }
    // navigator.geolocation.getCurrentPosition(position => {
    //   this.latitude = position.coords.latitude;
    //   this.longitude = position.coords.longitude;
    // })
   

    this.geo.collection('localCafe').snapshot().subscribe(data =>{

      data.forEach(item=>{
        //console.log(item.data().position.geohash);

        this.pointList.push(item.data());
        this.lati=item.data().position.geopoint.latitude;
        this.longi =item.data().position.geopoint.longitude;
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

  logOut(){

    this.afAuth.auth.signOut();
    this.navCtrl.navigateForward('/login');
  }
  home(){

    this.navCtrl.navigateForward('/suggested-list');
  }
  
  public getDirection(lati,longi) {
    navigator.geolocation.getCurrentPosition(position => {
      this.dir = {
        origin: { lat: position.coords.latitude , lng: position.coords.longitude},
        destination: { lat: lati, lng: longi}
      }
    })
    
  }

  seeMore(point){
    this.afAuth.user.subscribe((user) => {
      if (user) {
       
        this.route.navigate(['/see-more'],{queryParams:{
          name:point.name,
          address:point.address,
          phone:point.phone,
          email:point.email,
          from:point.from,
          to: point.to
          }})
       
        console.log(this.afAuth.auth.currentUser.uid)
      } else {
         
        this.navCtrl.navigateForward('/login');
      }
    })

  }
}
