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
<<<<<<< HEAD
    apiKey: "AIzaSyA-kTR7fRDa0qxM0hBMROLG8APChD8RTxY",
=======
      apiKey:''
>>>>>>> 58a62079566e80814136164be312060c9ef2bb7c
    })
      
  ],
  declarations: [MapPage],
})
export class MapPageModule {}
