import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { BehaviorSubject, Observable } from 'rxjs';
import * as geofirex from 'geofirex';
import * as firebaseApp from 'firebase/app';
import * as firebase from 'firebase/app';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class GeoService {

  dbRef: any;
  geoFire: any;
  geo = geofirex.init(firebaseApp);
  collectionRef
  ans;
  hits = new BehaviorSubject([]);
  txt;
  payl: any;
  items =[];
  point;
  cities;
  write: any;

  item: Observable<InternetCafe>;

  constructor(private db: AngularFireDatabase, private http: HttpClient, private firestore: AngularFirestore) {
   // reference a database location for Geofire

    // var firebaseRef = firebase.database().ref('list')
    // this.geoFire = new GeoFire(firebaseRef);
    // var ref = this.geoFire.ref();  // ref === firebaseRef
    // db.list(ref);
    // firebaseRef.on('value', resp =>{
    //   this.items = snapshoptToArray(resp);
    //   });
    //   const snapshoptToArray = snapshot =>{
    //     let returnArray = [];
    //     snapshot.forEach(element => {
    //       let item = element.val();
    //       item.key = element.key;
    //       returnArray.push(item)
    //     });
    //     return returnArray;
        
    //   }
    
    //this.showConfig();
  }

  //set point to a firestore collection
  setALocation(lat , lng, )
  {
    this.point = this.geo.point(lat, lng);
    this.cities = this.firestore.collection('localCafe');
    this.cities.add({URL:'http://www.google.com', address: '', email: 'zanoxolo', name: 'we', phone: 'fgh65768', position: this.point.data }).then(()=> {
     console.log('successful');
    }).catch(err =>{
    console.log(err.message);
    })
  }



  // // set points to geoFire database
  setLocation(key: string, coords: Array<number>) {
    this.geoFire.set(key, coords)
      .then(_ => console.log('location updated'))
      .catch(err => console.log(err))

      
  }

  //Query nearby locations, then maps to BehaviorSubject

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


  getGeopoints(address){
   return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address='+ address +'key=AIzaSyA-kTR7fRDa0qxM0hBMROLG8APChD8RTxY')
  }

  // showConfig() {
  //   this. getGeopoints()
  //     .subscribe((data) => {
  //       console.log(data);
  //     });
  // }
  
}
