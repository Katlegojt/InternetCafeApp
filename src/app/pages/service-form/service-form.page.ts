import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NavController, AlertController } from '@ionic/angular';
import { GeoService } from 'src/app/services/geo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.page.html',
  styleUrls: ['./service-form.page.scss'],
})

export class ServiceFormPage implements OnInit {

  Ihours: string = "0 min"
  Iprice: 0;
  arraylist: Array <{Ihours :string , Iprice: number}>=[];
  key: any;
  Printingblack: any;
  Printingcolor: any;
  Scannerprice: any;
  Faxprice: any;
  Emailprice: any;
  Bindingprice: any;
  
  
  constructor(private navCtrl: NavController,
    private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private alert:AlertController,
    private route: ActivatedRoute,
    private router : Router,
    private db : AngularFirestore
    
    
    ) {
      
     }
    

  validations_form: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';
  name:string;
  value:string;
  
  validation_messages = {
    'Ihours': [
      { type: 'required', message: 'Internet time is required.' }
     
    ],
    'Iprice': [
      { type: 'required', message: 'Internet price is required.' }
    ],
   
    'Printingblack': [
      { type: 'required', message: 'Printing price is required.' }
    ],
    'Printingcolor': [
      { type: 'required', message: 'Printing price is required.' }
    ],
  
    'Scannerprice': [
      { type: 'required', message: 'Scanning price is required.' }
    ],
  
   'Faxprice': [
    { type: 'required', message: 'Fax price is required.' }
  ],
  
  'Emailprice': [
    { type: 'required', message: 'Price is required.' }
  ],
  'Bindingprice': [
    { type: 'required', message: 'Price is required.' }
  ],
 };
 

  ngOnInit() {
    
    this.validations_form = this.formBuilder.group({
      Ihours: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ])),
      Iprice: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ])),
      Printingblack: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ])),
      Printingcolor: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ])),
     
      Scannerprice: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ])),
     
      Faxprice: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ])),
      
      Emailprice: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ])),
     
      Bindingprice: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ])),

    });

    this.route.queryParams
    .subscribe(params => {
       
      this.key = params.key;
      console.log(this.key); // popular
    });
  }
  submit(){
    
  }
 
  add(value1, value2){
    this.arraylist.push({Ihours: value1, Iprice: value2});
    this.Ihours="0 min";
    this.Iprice=0;
    console.log(this.arraylist)

  }

 
 
  addService() {
    let service = {Time:this.arraylist, Printingblk:this.Printingblack,Printingcolor:this.Printingcolor,Scannerprice:this.Scannerprice,
                 Faxprice:this.Faxprice,Emailprice:this.Emailprice,Bindingprice:this.Bindingprice}
    this.db.doc('localCafe/'+ this.key).update({
     service:service
    })
    this.router.navigate(['/services'], { queryParams: { key: this.key, } });
  }
}