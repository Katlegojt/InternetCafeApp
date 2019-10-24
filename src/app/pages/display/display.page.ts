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
  blkNWhite: any;
  color: any;
  scanner: any;
  fax: any;
  email: any;
  binding: any;


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

  updateService(){
    let service = {Time:this.interTime, Printingblk:this.blkNWhite,
                   Printingcolor:this.color,Scannerprice:this.scanner,
                   Faxprice:this.fax,Emailprice:this.email,
                   Bindingprice:this.binding}
    this.db.doc('localCafe/'+ this.key).update({
    service:service
   })
   this.route.navigate(['/services'], { queryParams: { key: this.key, } });
  }
}

