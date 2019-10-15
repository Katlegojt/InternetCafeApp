import { Injectable } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import * as firebase from "firebase"
import { User } from '../modules/User';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  applicationVerifier:any;
  provider:any;
  constructor(public alertCtrl:AlertController,  private db: AngularFirestore,public navCtrl: NavController) { }
  registerUser(value){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
      .then(
        res => resolve(res),
        err => reject(err))
    })
   }

   reset(value){
    return new Promise<any>((resolve, reject) => {
    firebase.auth().sendPasswordResetEmail(value)
    .then((res: any) => console.log(res))
    .catch((error: any) => console.error(error));
    
    
    })}
    loginWithNumber(value){
     this. applicationVerifier=new firebase.auth.RecaptchaVerifier('recaptcha-container',firebase.auth().signInWithPhoneNumber);
  //     return new Promise<any>((resolve, reject) => {
  //     // firebase.auth().verifyPhoneNumber('+123456789', '30000')
  //     firebase.auth().signInWithPhoneNumber(value.email,this.applicationVerifier)
  // .then((res: any) => console.log(res))
  // .catch((error: any) => console.error(error));
  //    })
}

   loginUser(value){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
      .then(
        res => resolve(res),
        err => reject(err))
    })
   }
  //  firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
   loginWithGoogle(){
     return new Promise<any>((resolve,reject)=>{
       firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
       .then(
         res=> resolve(res),
         err =>reject(err)
       )
     })
   }
   loginWithGitHub(){
    return new Promise<any>((resolve,reject)=>{
      firebase.auth().signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then(
        res=> resolve(res),
        err =>reject(err)
      )
      
    })
  }
  facebookLogin() {
    return new Promise<any>((resolve,reject)=>{
      firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(
        res=> resolve(res),
        err =>reject(err)
      )
      
    })
  }
  twitterLogin(){
    return new Promise<any>((resolve,reject)=>{
      firebase.auth().signInWithPopup(new firebase.auth.TwitterAuthProvider())
      .then(
        res=> resolve(res),
        err =>reject(err)
      )
      
    })
  }
   logoutUser(){
    return new Promise((resolve, reject) => {
      if(firebase.auth().currentUser){
        firebase.auth().signOut()
        .then(() => {
          console.log("LOG Out");
          resolve();
        }).catch((error) => {
          reject();
        });
      }
    })
  }
//  for phone
get windowRef() {
  return window
}

  
  userDetails(){
    return firebase.auth().currentUser;
  }
          // sign up
          signup(user: User) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password).then((credential) => {
              this.db.collection('users').doc(credential.user.uid).set({
                username : user.username,
                email : user.email,
                UserID: firebase.auth().currentUser.uid,
                profilepic: "",
              });
  
              localStorage.setItem('userid', firebase.auth().currentUser.uid);
              firebase.auth().currentUser.updateProfile({
                displayName : user.username,
                photoURL: '',
  
              }).then(() => {
                this.navCtrl.navigateRoot('/login');
  
              }).catch(err => {
                alert(err.message);
              });
            }).catch(err => {
              alert(err.message);
            });
  
           }
}
