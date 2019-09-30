import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
//import * as GeoFire from 'geofire';
import { GeoFire } from 'geofire';
import { BehaviorSubject } from 'rxjs';
import * as firebase from 'firebase'

@Injectable({
  providedIn: 'root'
})
export class GeoService {

  dbRef: any;
  geoFire: any;
  collectionRef

  hits = new BehaviorSubject([])

  constructor(private db: AngularFireDatabase) {
    //reference a database location for Geofire

    var firebaseRef = firebase.database().ref();
    this.geoFire = new GeoFire(firebaseRef);

    var ref = this.geoFire.ref();  // ref === firebaseRef

    db.list(ref);


  }

  // adds Geofire data to a database
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
}
