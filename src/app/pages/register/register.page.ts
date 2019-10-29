import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/modules/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  validations_form: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

 
  validation_messages = {
    'username': [
      { type: 'required', message: 'Username is required.' },
      { type: 'pattern', message: 'Enter a valid username.' }
    ],
    'Race': [
      { type: 'required', message: 'ethnicity is required.' },
      { type: 'pattern', message: 'Select a valid Race.' }
    ],
    'gender': [
      { type: 'required', message: 'gender is required.' },
      { type: 'pattern', message: 'Select a valid gender.' }
    ],
   'email': [
     { type: 'required', message: 'Email is required.' },
     { type: 'pattern', message: 'Enter a valid email.' }
   ],
   'password': [
     { type: 'required', message: 'Password is required.' },
     { type: 'minlength', message: 'Password must be at least 5 characters long.' }
   ]
 };
 
  constructor(
    private navCtrl: NavController,
    private authService: AuthenticationService,
    private formBuilder: FormBuilder
  ) {
   
  }

  ngOnInit(){
    this.validations_form = this.formBuilder.group({
      username: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z]+$')
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      Race: new FormControl('', Validators.compose([
        Validators.required,
       
      ])),
      gender: new FormControl('', Validators.compose([
        Validators.required,
       
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
    });
  }
 
  tryRegister(value){
    this.authService.signup(value)
     
  }
 
  goLoginPage(){
    this.navCtrl.navigateForward('/login');
  }

racee:string='';
raceeChangeHandler(event: any){
  this.racee=event.target.value;
}
gend:string='';
gendChangeHandler(event: any){
  this.gend=event.target.value;
}

}
