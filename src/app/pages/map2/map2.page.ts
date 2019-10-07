import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import * as firebaseApp from 'firebase/app';
import * as geofirex from 'geofirex';


@Component({
  selector: 'app-map2',
  templateUrl: './map2.page.html',
  styleUrls: ['./map2.page.scss'],
})
export class Map2Page implements OnInit {

  points: Observable<any>;
  // geofirex = require('geofirex')
  geo = geofirex.init(firebaseApp);
  radius = new BehaviorSubject(1);
  switch;

  constructor() {

    const cities = this.geo.collection('internetCafe');
  //cities.add({ name: 'Phoenix33', position: point.data });

    const center = this.geo.point(-25.7479, 28.2293)
    

     this.points = this.radius.pipe(
      switchMap(rad => {
        return cities.within(center, rad, 'position');
      })
    );

  this.points.subscribe(data => {
    console.log(data);
  })
   
  }

  ngOnInit() {

  }
  update(v) {
    this.radius.next(v);
  }

}
