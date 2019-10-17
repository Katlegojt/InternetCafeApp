import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NavController, AlertController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';
// import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth'
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  validations_form: FormGroup;
  errorMessage: string = '';
  // formBuilder: any;
  constructor(
    // public alertController: AlertController,
    private navCtrl: NavController,
    private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    public alertCtrl:AlertController,
    public afAuth: AngularFireAuth,
   
    
  ) { }
  ngOnInit() {
 
    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
    });

  }
  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' }
    ]
  };

  
  
  loginUser(value){
    this.authService.loginUser(value)
    .then(res => {
      console.log(res);
      this.errorMessage = "";
      this.navCtrl.navigateForward('/suggested-list');
    }, err => {
      this.errorMessage = err.message;
      console.log(err);
    })
  }
  loginWithGoogle(value){
    this.authService.loginWithGoogle()
    .then(
      res=>{
        console.log(res);
        this.errorMessage="success", "Successfully Logged In with Google";
        this.navCtrl.navigateForward('/suggested-list');

      },err=>{
        this.errorMessage="danger", err.message;
        console.log(err);
      }
    )
  }
  facebookLogin(value){
    this.authService.facebookLogin()
    .then(
      res=>{
        console.log(res);
        this.errorMessage="success", "Successfully Logged In with Facebook";
        this.navCtrl.navigateForward('/suggested-list');

      },err=>{
        this.errorMessage="danger", err.message;
        console.log(err);
      }
    )
  }
  twitterLogin(){
    this.authService.twitterLogin()
    .then(
      res=>{
        console.log(res);
        this.errorMessage="success", "Successfully Logged In with Twitter";
        this.navCtrl.navigateForward('/suggested-list');

      },err=>{
        this.errorMessage="danger", err.message;
        console.log(err);
      }
    )
  }

  loginAnonymously(){
    this.afAuth.auth.signInAnonymously().then(() => {
      localStorage.setItem('userid', this.afAuth.auth.currentUser.uid);
      this.navCtrl.navigateForward('/suggested-list');

    }).catch(err => {
      alert(err.message);
    });
  }
  
  goToRegisterPage(){
    this.navCtrl.navigateForward('/register');
  }
 
value;

async presentPrompt() {
  const alert =await this.alertCtrl.create({
     header: 'Reset password',
     message: this.msg,

    inputs: [
      {
        name: 'Email',
        placeholder: 'Email'
      }
     
    ],
    buttons: [
      {
        text: 'Reset',
        role: 'reset',
        handler: (data) => {
        this.reset(data.Email)
         
        }
      },
     
    ]
  });
  await alert.present();
}
msg:string='';
msg2:string='';
reset(value){
 return new Promise<any>((resolve, reject) => {
 firebase.auth().sendPasswordResetEmail(value)
 .then((res: any) => this.msg = res=this.msg2)
 .catch((error: any) => this.msg = error);
 this.msg2="success"
 console.log(this.msg)
 
 })}
}
