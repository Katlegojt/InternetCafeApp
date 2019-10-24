import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { InternetCafe } from 'src/app/modules/internetCafe';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {
 
  key: string;
  itemList;
  private cafes: AngularFirestoreDocument<InternetCafe>;
  internetCafe : InternetCafe
  internetTime:any;
  blkNWhite: any;
  color: any;
  scanner: any;
  fax: any;
  email: any;
  binding: any;

  constructor(private db:AngularFirestore, private route:ActivatedRoute,private dataService:DataService) { 

  //   this.db.collection('localCafe').snapshotChanges().subscribe(data =>{
  //     data.forEach(item=>{ 
  //   });
  // });

   
  console.log(this.internetTime);
}

  ngOnInit() {
    this.route.queryParams
    .subscribe(params => {
       
      this.key = params.key;
      console.log(this.key); // popular
    });


    this.db.collection("localCafe").doc(this.key)
    .get().subscribe((doc)  =>{
      if (doc.exists) {
        console.log("Document data:", doc.data());
        this.internetTime = doc.data().service.Time;
        this.blkNWhite = doc.data().service.Printingblk;
        this.color = doc.data().service.Printingcolor;
        this.scanner =doc.data().service.Scannerprice;
        this.fax =doc.data().service.Faxprice;
        this.email =doc.data().service.Emailprice;
        this.binding =doc.data().service.Bindingprice;
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    });
  }

  

}
   