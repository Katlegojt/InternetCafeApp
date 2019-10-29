import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth'
import * as firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';





@Component({
  selector: 'app-see-more',
  templateUrl: './see-more.page.html',
  styleUrls: ['./see-more.page.scss'],
})
export class SeeMorePage implements OnInit {
objectA={
  key:'',
  name:'',
  address:'',
  phone:'',
  email:'',
  from:'',
  to:'',
  img:'',
  URL:'', 
}
  itemList;
  text: string;
  uid: string;
  chatRef: any;
  constructor(
    private navCtrl: NavController,
    private dataService: DataService,
    private route:ActivatedRoute,
    private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    public alertCtrl:AlertController,
    public afAuth: AngularFireAuth,
    public firestore: AngularFirestore
  ) {
   

   }

  ngOnInit() {
    this.route.queryParams.subscribe(data=>{
      console.log(data);
      this.objectA.name=data.name;
      this.objectA.address=data.address;
      this.objectA.phone=data.phone;
      this.objectA.email=data.email;
      this.objectA.from=data.from;
      this.objectA.to=data.to;
      this.objectA.img=data.img;
      this.objectA.key=data.key;
      this.objectA.URL=data.URL;

      this.uid = this.afAuth.auth.currentUser.uid;
      this.chatRef = this.firestore.collection('comments', ref => ref.orderBy('Timestamp').where('key', '==', this.objectA.key )).valueChanges()
      
    })
  }
  goToMapPage(){
    this.navCtrl.navigateForward('/map2', { queryParams: {key:this.objectA.key}});
  }
  goToPostsPage(){
    this.navCtrl.navigateForward('/posts');
  }
  goToServicesPage(){
    this.navCtrl.navigateForward('/services', { queryParams: {key:this.objectA.key}});
  }
   async presentPrompt() {
    const alert = await this.alertCtrl.create({
      header: 'Comment here',
      message: 'Message <strong>text</strong>!!!',
      inputs: [
                {
                  type:'text',
                  name: 'comment',
                  placeholder: 'Type...'
                }
               
              ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('cancelled');
          }
        }, {
          text: 'Post',
          handler: (data) => {
            this.text = data.comment;
            this.send();
            console.log(data.comment);
          }
        }
      ]
    });

    await alert.present();
  }
  home(){

    this.navCtrl.navigateForward('/suggested-list');
  }
//   goToWebsite(){

//      this.navCtrl.navigateForward("https://www.w3schools.com/html/")
// }
  send() {

    if (this.text !== '') {
      this.firestore.collection('comments').add({
        Name : this.afAuth.auth.currentUser.displayName,
        Message : this.text,
        UserID : this.afAuth.auth.currentUser.uid,
        Timestamp : Date.now(),
        key: this.objectA.key,
    
      });
      this.text = '';
    }
    
    }
}
