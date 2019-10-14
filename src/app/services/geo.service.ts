import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { BehaviorSubject } from 'rxjs';
import * as geofirex from 'geofirex';
import * as firebaseApp from 'firebase/app';
import { HttpClient } from '@angular/common/http';

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
  constructor(private db: AngularFireDatabase, private http: HttpClient) {
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
    
    this.showConfig();
  }

  //set point to a firestore collection
  setALocation(lat , lng, name)
  {

    const point = this.geo.point(lat, lng);
    const cities = this.geo.collection('internetCafe');
    cities.add({ name: name, position: point.data });

  }



  // set points to geoFire database
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


  getGeopoints(){
   return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyA-kTR7fRDa0qxM0hBMROLG8APChD8RTxY')
  }

  showConfig() {
    this. getGeopoints()
      .subscribe((data) => {
        console.log(data);
      });
  }
  
}
