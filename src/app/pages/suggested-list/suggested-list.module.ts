import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SuggestedListPage } from './suggested-list.page';

const routes: Routes = [
  {
    path: '',
    component: SuggestedListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SuggestedListPage]
})
export class SuggestedListPageModule {}
