import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DisplayServiceService } from 'src/app/services/display-service.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-display',
  templateUrl: './display.page.html',
  styleUrls: ['./display.page.scss'],
})
export class DisplayPage implements OnInit {
  key: any;
  interTime: any;


  constructor(private router: ActivatedRoute,
              private service: DisplayServiceService,
              private route: Router,
              private db:AngularFirestore) { 

 
  }
 

  ngOnInit() {

    this.router.queryParams
    .subscribe(params => {
       
      this.key = params.key;
      console.log(this.key); // popular
    });


    this.db.collection("localCafe").doc(this.key)
    .get().subscribe((doc)  =>{
      if (doc.exists) {
        console.log("Document data:", doc.data());
        this.interTime =doc.data().service.Time;
        
        
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    });

}
}

