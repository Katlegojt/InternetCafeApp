import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavController, AlertController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.page.html',
  styleUrls: ['./reset.page.scss'],
})
export class ResetPage implements OnInit {
  validations_form: FormGroup;
  errorMessage: string = '';
  // formBuilder: any;
  constructor(
 
    private navCtrl: NavController,
    private authService: AuthenticationService,
    // private formBuilder: FormBuilder,
    // public alertCtrl:AlertController,
   
    
  ) { }
  ngOnInit() {
 
  //   this.validations_form = this.formBuilder.group({
  //     email: new FormControl('', Validators.compose([
  //       Validators.required,
  //       Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
  //     ])),
  //     password: new FormControl('', Validators.compose([
  //       Validators.minLength(5),
  //       Validators.required
  //     ])),
  //   });

  // }
  // validation_messages = {
  //   'email': [
  //     { type: 'required', message: 'Email is required.' },
  //     { type: 'pattern', message: 'Please enter a valid email.' }
  //   ],
  //   'password': [
  //     { type: 'required', message: 'Password is required.' },
  //     { type: 'minlength', message: 'Password must be at least 5 characters long.' }
  //   ]
   };

 
}
