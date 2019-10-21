import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth'
import * as firebase from 'firebase';





@Component({
  selector: 'app-see-more',
  templateUrl: './see-more.page.html',
  styleUrls: ['./see-more.page.scss'],
})
export class SeeMorePage implements OnInit {
objectA={
  name:'',
  address:'',
  phone:'',
  email:'',
  from:'',
  to:'',
}
  itemList;
  constructor(
    private navCtrl: NavController,
    private dataService: DataService,
    private route:ActivatedRoute,
    private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    public alertCtrl:AlertController,
    public afAuth: AngularFireAuth,
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
      
    })
  }
  goToMapPage(){
    this.navCtrl.navigateForward('/map2');
  }
  goToPostsPage(){
    this.navCtrl.navigateForward('/posts');
  }
  goToServicesPage(){
    this.navCtrl.navigateForward('/services');
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
            console.log(data.name);
          }
        }
      ]
    });

    await alert.present();
  }
  home(){

    this.navCtrl.navigateForward('/suggested-list');
  }
}
