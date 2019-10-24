import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NavController, AlertController } from '@ionic/angular';
import { GeoService } from 'src/app/services/geo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.page.html',
  styleUrls: ['./service-form.page.scss'],
})
export class ServiceFormPage implements OnInit {

  Ihours: "";
  Iprice: 0;
  arraylist: Array <{Ihours :string , Iprice: number}>=[];
  arraylist1: Array <{Pagesize :string , Printingprice: number}>=[];
  arraylist2: Array <{Scannerpage :string , Scannerprice: number}>=[];
  arraylist3: Array <{Faxpage :string , Faxprice: number}>=[];
  myRadio0;

  key;

  constructor(private navCtrl: NavController,
    private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private alert:AlertController,
    private route:ActivatedRoute,
    private db: AngularFirestore,
    private router: Router
    ) { }
  validations_form: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';
 
  validation_messages = {
    'Ihours': [
      { type: 'required', message: 'Internet time is required.' }
     
    ],
    'Iprice': [
      { type: 'required', message: 'Internet price is required.' }
    ],
   
    'Printingprice': [
      { type: 'required', message: 'Printing price is required.' }
    ],
    'Pagesize': [
      { type: 'required', message: 'Page size is required.' }
    ],
    'Color': [
      { type: 'required', message: 'Choose a color.' }
    ],
    'Scannerpage': [
      { type: 'required', message: 'Page numbers is required.' }
    ],
    'Scannerprice': [
      { type: 'required', message: 'Scanning price is required.' }
    ],
   'Faxpage': [
     { type: 'required', message: 'Page number is required.' }
   ],
   'Faxprice': [
    { type: 'required', message: 'Fax price is required.' }
  ],
   'Emailpage': [
    { type: 'required', message: 'Page number is required.' }
  ],
  'Emailprice': [
    { type: 'required', message: 'Price is required.' }
  ],
  'Bindingpage': [
    { type: 'required', message: 'Page number is required.' }
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
      Printingprice: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ])),
      Pagesize: new FormControl('', Validators.compose([
        Validators.required,
        // Validators.pattern('^[0-9]+$')
      ])),
      Color: new FormControl('', Validators.compose([
        Validators.required,
        // Validators.pattern('^[0-9]+$')
      ])),
      Scannerpage: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ])),
      Scannerprice: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ])),
      Faxpage: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ])),
      Faxprice: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ])),
      Emailpage: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ])),
      Emailprice: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ])),
      Bindingpage: new FormControl('', Validators.compose([
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
  tryRegister(){
    
  }

  add(value1, value2){
    this.arraylist.push({Ihours: value1, Iprice: value2});

    console.log(this.arraylist)

  }

  add1(value1, value2){
    this.arraylist1.push({Pagesize: 'A'+value1, Printingprice: value2});

    console.log(this.arraylist1)
  
  }

  add2(value1, value2){
    this.arraylist2.push({Scannerpage: value1, Scannerprice: value2});

    console.log(this.arraylist2)
  
  }
  add3(value1, value2){
    this.arraylist3.push({Faxpage: value1, Faxprice: value2});

    console.log(this.arraylist3)
    
  }
  addService() {
    let service = {Time:this.arraylist,Printing:this.arraylist1, Scanning:this.arraylist2, faxing:this.arraylist3}
    this.db.doc('localCafe/'+ this.key).update({
      service:service
    })

    this.router.navigate(['/display'], { queryParams: { key: this.key, } });
  }


}
