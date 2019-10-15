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
      { type: 'pattern', message: 'Enter a valid phone.' }
    ],
   'email': [
     { type: 'required', message: 'Email is required.' },
     { type: 'pattern', message: 'Enter a valid email.' }
   ],
   
 };
 
  constructor(
    private navCtrl: NavController,
    private authService: AuthenticationService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(){
    this.validations_form = this.formBuilder.group({
      name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z]+$')
      ])),
      address: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z]+$')
      ])),
      phone: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z]+$')
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      
    });
  }
 
  tryRegister(value){
    // this.authService.registerUser(value)
    //  .then(res => {
    //    console.log(res);
    //    this.errorMessage = "";
    //    this.successMessage = "Your account has been created. Please log in.";
    //  }, err => {
    //    console.log(err);
    //    this.errorMessage = err.message;
    //    this.successMessage = "";
    //    this.navCtrl.navigateForward('/login');
    //  })
  }
 
  goLoginPage(){
    this.navCtrl.navigateForward('/login');
  }

}
