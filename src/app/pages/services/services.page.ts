import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { snapshotChanges } from 'angularfire2/database';
import { ActivatedRoute } from '@angular/router';
import { database } from 'firebase';
import { DataService } from 'src/app/services/data.service';
import { InternetCafe } from 'src/app/modules/internetCafe';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {
  cafes: any;
  key: string;
  itemList;
  private userDoc: AngularFirestoreDocument<InternetCafe>;

  constructor(private db:AngularFirestore, private route:ActivatedRoute,private dataService:DataService) { 

  //   this.db.collection('localCafe').snapshotChanges().subscribe(data =>{
  //     data.forEach(item=>{ 
  //   });
  // });

  this.cafes = this.db.doc<InternetCafe>('localCafe/'+this.key).valueChanges().subscribe();
  
}

  ngOnInit() {

    this.route.queryParams
    .subscribe(params => {
       
      this.key = params.key;
      console.log(this.key); // popular
    });
  }

  

}
