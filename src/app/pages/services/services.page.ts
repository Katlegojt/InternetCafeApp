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
  name= '';

  constructor(private db:AngularFirestore, private route:ActivatedRoute,private dataService:DataService) { 

    this.db.collection('localCafe').snapshotChanges().subscribe(data =>{
      data.forEach(item=>{ 
    });
  });

   
  console.log(this.name);
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
        this.name =doc.data().service.Printing[0].Pagesize;
        console.log("Document service:",name );
        
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    });
  }

  

}
