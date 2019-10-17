import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-add-internet-cafe',
  templateUrl: './add-internet-cafe.page.html',
  styleUrls: ['./add-internet-cafe.page.scss'],
})
export class AddInternetCafePage implements OnInit {

  validations_form: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';
 
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
   'closeTime':[
    { type: 'required', message: 'Please select closing time.' },
   
   ],
   'openTime':[
    { type: 'required', message: 'Please select opening time.' },
   
   ],
   'website':[
    { type: 'required', message: 'website is required.' },
    { type: 'pattern', message: 'Enter a valid website url.' }
   ]
 };
 
  constructor(
    private navCtrl: NavController,
    private authService: AuthenticationService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(){
    
    this.validations_form = this.formBuilder.group({
      openTime:new FormControl('',Validators.compose([
        Validators.required
      ])),
      closeTime:new FormControl('',Validators.compose([
        Validators.required
      ])),
      name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z]+$')
      ])),
      address: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]+$')
      ])),
      website: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]+$')
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

}
