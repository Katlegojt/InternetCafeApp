import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { GeoService } from 'src/app/services/geo.service';

@Component({
  selector: 'app-add-internet-cafe',
  templateUrl: './add-internet-cafe.page.html',
  styleUrls: ['./add-internet-cafe.page.scss'],
})
export class AddInternetCafePage implements OnInit {

  validations_form: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';
  name;
 address;
  phone;
  email;
 
  validation_messages = {
    'name': [
      { type: 'required', message: 'name is required.' },
      { type: 'pattern', message: 'Enter a valid name.' }
    ],
    'address': [
      { type: 'required', message: 'address is required.' },
      { type: 'pattern', message: 'Enter a valid address.' }
    ],
    'phone': [
      { type: 'required', message: 'phone is required.' },
      { type: 'pattern', message: 'Phone must contain numbers only.' }
    ],
   'email': [
     { type: 'required', message: 'Email is required.' },
     { type: 'pattern', message: 'Enter a valid email.' }
   ],
   
 };
  latitude: any;
  longitude: any;
 
  constructor(
    private navCtrl: NavController,
    private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private geoService : GeoService
  ) {
    //this.getGeopoints('540 Paul kruger street, pretoria')
    
  }

  ngOnInit(){
    this.validations_form = this.formBuilder.group({
      name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z]+$')
      ])),
      address: new FormControl('', Validators.compose([
        Validators.required,
        
      ])),
      phone: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      
    });
  }
 
  addInternetCafe(){

  }
  tryRegister(){
    this.navCtrl.navigateForward('/service-form');
  }
  goLoginPage(){
    this.navCtrl.navigateForward('/login');
  }

  getGeopoints(address,name, phone ,email){

this.geoService.getAGeopoints(address).subscribe(data => {console.log(data.results[0].geometry.location),
   this.latitude = data.results[0].geometry.location.lat,
   this.longitude = data.results[0].geometry.location.lng,
   this.geoService.setALocation(this.latitude ,  this.longitude, name,address, phone ,email)
  
  }
  );

  }

}
