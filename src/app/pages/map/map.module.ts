import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';

import { IonicModule } from '@ionic/angular';

import { MapPage } from './map.page';
// import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";

const routes: Routes = [
  {
    path: '',
    component: MapPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,GooglePlaceModule,
    RouterModule.forChild(routes)
    ,AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBy1jG31ICdmSvQDePrjpYVD4TC4fEjKZQ'
    })
  ],
  declarations: [MapPage],
})
export class MapPageModule {}
