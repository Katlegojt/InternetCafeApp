import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';

import { IonicModule } from '@ionic/angular';

import { Map2Page } from './map2.page';

const routes: Routes = [
  {
    path: '',
    component: Map2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBy1jG31ICdmSvQDePrjpYVD4TC4fEjKZQ'
    })
  ],
  declarations: [Map2Page]
})
export class Map2PageModule {}
