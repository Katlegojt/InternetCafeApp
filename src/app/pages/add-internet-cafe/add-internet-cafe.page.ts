import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController, LoadingController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { GeoService } from 'src/app/services/geo.service';
import { service } from 'src/app/modules/service';
import * as firebase from 'firebase';
@Component({
  selector: 'app-add-internet-cafe',
  templateUrl: './add-internet-cafe.page.html',
  styleUrls: ['./add-internet-cafe.page.scss'],
})
export class AddInternetCafePage implements OnInit {
 validations_form: FormGroup;
 errorMessage: string = '';
 successMessage: string = '';
name;
 address;
  phone;
  email;
  website;
  openTime;
  closeTime;
  selectedFile;
  imageUrl: string;
  promise;
 
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
      { type: 'pattern', message: 'Phone must contain numbers only.' }
    ],
   'email': [
     { type: 'required', message: 'Email is required.' },
     { type: 'pattern', message: 'Enter a valid email.' }
   ],
   'closeTime':[
    { type: 'required', message: 'Please select closing time.' },
   
   ],
   'openTime':[
    { type: 'required', message: 'Please select opening time.' },
   
   ],
   'website':[
    { type: 'required', message: 'website is required.' },
    { type: 'pattern', message: 'Enter a valid website url.' }
   ]
 };
  latitude: any;
  longitude: any;
  id;
  id1;
  
 
  constructor(
    private navCtrl: NavController,
    private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private geoService : GeoService,
    public afAuth: AngularFireAuth,
    public loadingCtrl: LoadingController
    
  ) {
    //this.getGeopoints('540 Paul kruger street, pretoria')
    this.latitude=0;
    this.longitude=0;
  }
  ngOnInit(){
    
    this.validations_form = this.formBuilder.group({
      openTime:new FormControl('',Validators.compose([
        Validators.required
      ])),
      closeTime:new FormControl('',Validators.compose([
        Validators.required
      ])),
      name: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      address: new FormControl('', Validators.compose([
        Validators.required,
        
      ])),
      website: new FormControl('', Validators.compose([
        Validators.required,
        
      ])),
      phone: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      
    });
    // this.admobFreeService.BannerAd();
    // this.showInterstitial();
    // this.showRewardVideo();
  }
  onUpload(event) {
    this.selectedFile = <File>event.target.files[0];
    console.log(event.target.files[0]);
    const file = event.target.files[0];
    this.uploadViaFileChooser(file);// call helper method
    console.log("upload complete !");
  }
  
  uploadViaFileChooser(_image) {
    this.openLoader();
    console.log('uploadToFirebase');
    return new Promise((resolve, reject) => {
      const fileRef = firebase.storage().ref('images/' + this.selectedFile.name);
      const uploadTask = fileRef.put(_image);
      uploadTask.on(
        'state_changed',
        (_snapshot: any) => {
          console.log(
            'snapshot progess ' +
            (_snapshot.bytesTransferred / _snapshot.totalBytes) * 100
          );
          const progress = (_snapshot.bytesTransferred / _snapshot.totalBytes) * 100;
          if (progress === 100) {
            fileRef.getDownloadURL().then(uri => {
              this.imageUrl = uri;
              console.log('downloadurl', uri);
              
            });
            
          
          }
        },
        _error => {
          console.log(_error);
          reject(_error); 
        },
        () => {
          // completion...
          resolve(uploadTask.snapshot);
        }
      );
    });
  }
  tryRegister(){
    //this.navCtrl.navigateForward('/service-form');
  }
  goLoginPage(){
    this.navCtrl.navigateForward('/login');
  }
  logOut(){
    this.afAuth.auth.signOut();
    this.navCtrl.navigateForward('/login');
  }
  getGeopoints(address,name,phone,email,url,from,to){   
   let service = {} as service
    this.geoService.getAGeopoints(address).subscribe(data => {console.log(data.results[0].geometry.location),
       this.latitude = data.results[0].geometry.location.lat,
       this.longitude = data.results[0].geometry.location.lng,
       this.id = this.geoService.setALocation(this.latitude,this.longitude,address,name,phone,email,url,from,to,this.imageUrl,service)},
      );
      this.navCtrl.navigateForward('/service-list');
      } 
      
      
   async openLoader() {
        const loading = await this.loadingCtrl.create({
          message: 'Picture loading ...',
          duration: 3000
        });
        await loading.present();
      }
      async closeLoading() {
        return await this.loadingCtrl.dismiss();
      }
    
}
