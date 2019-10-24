import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import { AgmDirectionModule} from 'agm-direction'



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
    IonicModule,AgmDirectionModule,
    RouterModule.forChild(routes),
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCd0QW8pbjAyI48NtgodmHK7qeilaUquXA",
    }),
    MatGoogleMapsAutocompleteModule.forRoot(),
  ],
  declarations: [Map2Page]
})
export class Map2PageModule {}
