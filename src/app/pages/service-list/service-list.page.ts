import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { InternetCafe } from 'src/app/modules/internetCafe';
import { NavController } from '@ionic/angular';

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
  key: any;

  constructor( private afAuth : AngularFireAuth, private navCtrl: NavController, private router:Router,public firestore: AngularFirestore,private route:ActivatedRoute) { 

    //this.uid=this.afAuth.auth.currentUser.uid;
    this.cafes = this.firestore.collection('localCafe', ref => ref.where("uid", "==" , "0HEwbk4ynnf9p2RrjwGNySe9MdC2")).snapshotChanges().subscribe(data =>{
      this.cafeList = data.map( e =>{
        return{

          key: e.payload.doc.id,
          ...e.payload.doc.data()
        } as InternetCafe

      });
    })
   
  }

  ngOnInit() {
    this.route.queryParams
    .subscribe(params => {
       
      this.key = params.key;
      console.log(this.key); // popular
    });
  }

  addServices(InternetCafe){
    this.router.navigate(['/service-form'], { queryParams: {key:InternetCafe.key}});
  }
  goToInternetCafePage(){
    this.navCtrl.navigateForward('/internetCafe');
  }
}
