import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
// import { AngularFireStorage } from '@angular/fire/storage';
import* as firebase from 'firebase';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.page.html',
  styleUrls: ['./comments.page.scss'],
})
export class CommentsPage implements OnInit {
  uid: string;
  chatRef: any;
  text: string;

  constructor(public fs:AngularFirestore,public af:AngularFireAuth,public nav:NavController, private authService: AuthenticationService,
    ) {
    this.uid=this.af.auth.currentUser.uid;
    this.chatRef = this.fs.collection('chats', ref=>ref.orderBy('Timestamp')).valueChanges();
   }
  //  (method) MainPage.send():void
   send(){
 if (this.text != ''){
  this.fs.collection('chats').add ({
    Name: this.af.auth.currentUser.displayName,
    Message: this.text,
    UserID: this.af.auth.currentUser.uid,
    Timestamp:firebase.firestore.FieldValue.serverTimestamp(),
  });
  this.text='';
 }
   }
  ngOnInit() {
  }
 logout(){
  //  this.authService.logO();
 }


}
