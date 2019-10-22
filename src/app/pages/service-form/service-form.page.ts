import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NavController, AlertController } from '@ionic/angular';
import { GeoService } from 'src/app/services/geo.service';


@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.page.html',
  styleUrls: ['./service-form.page.scss'],
})
export class ServiceFormPage implements OnInit {

  Ihours: "";
  Iprice: 0;
  arraylist: Array <{Ihours :string , Iprice: number}>=[];
  
  constructor(private navCtrl: NavController,
    private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private alert:AlertController
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
  }
  submit(){
    
  }
  tryRegister(){
    this.navCtrl.navigateForward('/suggested-list');
  }



  add(){
    this.arraylist.push({Ihours: this.Ihours, Iprice: this.Iprice});

    console.log(this.arraylist)
    this.Ihours="";
    this.Iprice= 0;
  }
}