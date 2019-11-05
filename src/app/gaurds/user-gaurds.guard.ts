import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController, AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UserGaurdsGuard implements  CanActivate {
  constructor(public nav: NavController, public afAuth: AngularFireAuth,public alertCtrl:AlertController,private navCtrl: NavController) { }
 canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
   return new Promise((resolve, reject) => {
     this.afAuth.user.subscribe((user) => {
       if (user) {
         resolve(true);
        
       } else {
         
         resolve(false);
         this.presentPrompt();
       }
     })
   });
  }
  async presentPrompt() {
    const alert = await this.alertCtrl.create({
      header: '',
      message: 'To access more information, you have to be logged in',
     
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('cancelled');
          }
        }, {
          text: 'okay',
          handler: () => {
            this.navCtrl.navigateForward('/login');
            console.log(name);
          }
        }
      ]
    });

    await alert.present();
  }
}