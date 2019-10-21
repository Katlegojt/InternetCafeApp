import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { GeoService } from 'src/app/services/geo.service';

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
  }
 
  addInternetCafe(){

  }
  tryRegister(){
    this.navCtrl.navigateForward('/service-form');
  }
  goLoginPage(){
    this.navCtrl.navigateForward('/login');
  }

  logOut(){

    this.afAuth.auth.signOut();
    this.navCtrl.navigateForward('/login');
  }
  getGeopoints(address,name,phone,email,url,from,to){   
   
    this.geoService.getAGeopoints(address).subscribe(data => {console.log(data.results[0].geometry.location),
       this.latitude = data.results[0].geometry.location.lat,
       this.longitude = data.results[0].geometry.location.lng,
       this.id = this.geoService.setALocation(this.latitude,this.longitude,address,name,phone,email,url,from,to,this.imageUrl).then((data)=>{
          console.log('id :', data)
       })

   
      
      },
    
      );
    

      }

      
    
}