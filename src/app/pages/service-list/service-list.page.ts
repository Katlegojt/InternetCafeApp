import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { InternetCafe } from 'src/app/modules/internetCafe';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.page.html',
  styleUrls: ['./service-list.page.scss'],
})
export class ServiceListPage implements OnInit {
  uid
  itemList
  cafeList: any;
  cafes: any;
  InternetCafe : InternetCafe

  constructor( private afAuth : AngularFireAuth, private router:Router,public firestore: AngularFirestore) { 

    this.uid=this.afAuth.auth.currentUser.uid;
    this.cafes = this.firestore.collection('localCafe', ref => ref.where("uid", "==" , this.uid)).snapshotChanges().subscribe(data =>{
      this.cafeList = data.map( e =>{
        return{

          key: e.payload.doc.id,
          ...e.payload.doc.data()
        } as InternetCafe

      });
    })
   
  }

  ngOnInit() {
  }

  addServices(InternetCafe){
    this.router.navigate(['/service-form'], { queryParams: {key:InternetCafe.key }});
  }

}
