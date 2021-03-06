import { Injectable } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import * as firebase from "firebase"
import { User } from '../modules/User';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

interface user {
	username: string,
	uid: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
 
	setUser(user: user) {
		this.user = user
	}


  applicationVerifier:any;
  provider:any;
  private user: user
  constructor(public alertCtrl:AlertController,  private db: AngularFirestore,public navCtrl: NavController,private afAuth: AngularFireAuth ) { }
  // registerUser(value){
  //   return new Promise<any>((resolve, reject) => {
  //     firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
  //     .then(
  //       res => resolve(res),
  //       err => reject(err))
  //   })
  //  }

   reset(value){
    return new Promise<any>((resolve, reject) => {
    firebase.auth().sendPasswordResetEmail(value)
    .then((res: any) => console.log(res))
    .catch((error: any) => console.error(error));
    
    
    })}
    loginWithNumber(value){
     this. applicationVerifier=new firebase.auth.RecaptchaVerifier('recaptcha-container',firebase.auth().signInWithPhoneNumber);
  
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
  signup(name, gender, email, password, ethnicity ){
            firebase.auth().createUserWithEmailAndPassword(email,password).then((credential) => {
              this.db.collection('users').doc(credential.user.uid).set({
                username : name,
                email : email,
                UserID: firebase.auth().currentUser.uid,
                ethnicity : ethnicity ,
                gender:gender ,
                
              }).then(() => {
                this.navCtrl.navigateRoot('/login');
                this.afAuth.auth.currentUser.updateProfile({
                  displayName : name,
                })
              }).catch(err => {
                alert(err.message);
              });
            }).catch(err => {
              alert(err.message);
            });
  
           }
}
