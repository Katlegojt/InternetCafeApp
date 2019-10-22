import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class DisplayServiceService {
  private itemDoc: AngularFirestoreDocument<item>;
  
  ;
  constructor(private nacCtrl:NavController,private angularFireStore: AngularFirestore) {

    
   }
  





}

