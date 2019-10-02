import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
//import * as GeoFire from 'geofire';
import { GeoFire } from 'geofire';
import { BehaviorSubject } from 'rxjs';
import * as firebase from 'firebase'
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class GeoService {

  dbRef: any;
  geoFire: any;
  collectionRef
 
  hits = new BehaviorSubject([]);
  txt;
  payl: any;
  items =[];
  constructor(private db: AngularFireDatabase) {
    //reference a database location for Geofire

    // var firebaseRef = firebase.database().ref('list')
    //  this.geoFire = new GeoFire(firebaseRef);

    // var ref = this.geoFire.ref();  // ref === firebaseRef
    // db.list(ref);

    // firebaseRef.on('value', resp =>{
      
    //   this.items = snapshoptToArray(resp);
    //   console.log('hello' + this.items);
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

      

  }

  dummyMethod(){
    this.geoFire.set("some_key", [37.79, -122.41]).then(function() {
      console.log("Provided key has been added to GeoFire");
    }, function(error) {
      console.log("Error: " + error);
    });
    this.geoFire.set({
      "some_key": [37.79, -122.41],
      "another_key": [36.98, -122.56]
    }).then(function() {
      console.log("Provided keys have been added to GeoFire");
    }, function(error) {
      console.log("Error: " + error);
    });
    
  }

  // adds Geofire data to a database
  setLocation(key: string, coords: Array<number>) {
    this.geoFire.set(key, coords)
      .then(_ => console.log('location updated'))
      .catch(err => console.log(err))

      
  }

  //Query nearby locations, then maps to BehaviorSubject
  
}
