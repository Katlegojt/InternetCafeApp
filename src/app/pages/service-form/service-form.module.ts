import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ServiceFormPage } from './service-form.page';

const routes: Routes = [
  {
    path: '',
    component: ServiceFormPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule ,
    RouterModule.forChild(routes)
  ],
  declarations: [ServiceFormPage]
})
export class ServiceFormPageModule {}
