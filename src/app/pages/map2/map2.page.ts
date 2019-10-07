import { Component, OnInit, NgZone } from '@angular/core';
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
  GoogleAutocomplete;
  autocomplete;
  autocompleteItems;
  geocoder = new google.maps.Geocoder;
  latitude ;
  longitude ;
  


  constructor(private zone: NgZone) {

    const cities = this.geo.collection('internetCafe');
    //cities.add({ name: 'Phoenix33', position: point.data });
    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.autocomplete = { input: '' };
    this.autocompleteItems = [];
    const center = this.geo.point(40, -119)

    this.points = this.radius.pipe(
      switchMap(rad => {
        return cities.within(center, rad, 'position');
      })
    );

  }

  ngOnInit() {
    this.latitude = -25.7479;
    this.longitude = 28.2293
    
  }

  update(v) {
    this.radius.next(v);
  }


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


}
