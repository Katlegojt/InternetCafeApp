import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
<<<<<<< HEAD
import { NavController } from '@ionic/angular';
import { GeoService } from 'src/app/services/geo.service';
import { Storage } from '@ionic/storage';
=======
import { NavController, AlertController } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
>>>>>>> 03cae4258aba7c4ec9a497e58a7b54d0f8cc1341

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.page.html',
  styleUrls: ['./service-form.page.scss'],
})
export class ServiceFormPage implements OnInit {

  Ihours: "";
  Iprice: 0;
  arraylist: Array <{Ihours :string , Iprice: number}>=[];
  constructor(private alert:AlertController) { }
    
//   validations_form: FormGroup;
//   errorMessage: string = '';
//   successMessage: string = '';
 
<<<<<<< HEAD
  validation_messages = {
    'InternetHours15': [
      { type: 'required', message: 'Price is required.' },
      { type: 'pattern', message: 'Price must be a number.' }
    ],
    'InternetHours30': [
      { type: 'required', message: 'Price is required.' },
      { type: 'pattern', message: 'Price must be a number.' }
    ],
    'InternetHours1h': [
      { type: 'required', message: 'Price is required.' },
      { type: 'pattern', message: 'Price must be a number.' }
    ],
    'Printing1': [
      { type: 'required', message: 'Price is required.' },
      { type: 'pattern', message: 'Price must be a number.' }
    ],
    'Printing2': [
      { type: 'required', message: 'Price is required.' },
      { type: 'pattern', message: 'Price must be a number.' }
    ],
    'Printing3': [
      { type: 'required', message: 'Price is required.' },
      { type: 'pattern', message: 'Price must be a number.' }
    ],
    'Printing4': [
      { type: 'required', message: 'Price is required.' },
      { type: 'pattern', message: 'Price must be a number.' }
    ],
    'PrintingA': [
      { type: 'required', message: 'Price is required.' },
      { type: 'pattern', message: 'Price must be a number.' }
    ],
    'PrintingB': [
      { type: 'required', message: 'Price is required.' },
      { type: 'pattern', message: 'Price must be a number.' }
    ],
    'PrintingC': [
      { type: 'required', message: 'Price is required.' },
      { type: 'pattern', message: 'Price must be a number.' }
    ],
    'PrintingD': [
      { type: 'required', message: 'Price is required.' },
      { type: 'pattern', message: 'Price must be a number.' }
    ],
    'Scanner1': [
      { type: 'required', message: 'Price is required.' },
      { type: 'pattern', message: 'Price must be a number.' }
    ],
    'Scanner2': [
      { type: 'required', message: 'Price is required.' },
      { type: 'pattern', message: 'Price must be a number.' }
    ],
   'Fax': [
     { type: 'required', message: 'Price is required.' },
     { type: 'pattern', message: 'Price must be a number.' }
   ],
   'Email': [
    { type: 'required', message: 'Price is required.' },
    { type: 'pattern', message: 'Price must be a number.' }
  ],
  'Binding': [
    { type: 'required', message: 'Price is required.' },
    { type: 'pattern', message: 'Price must be a number.' }
  ],
 
 };
  id1: any;
  constructor(private navCtrl: NavController,
    private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private geoService: GeoService,
    private storage: Storage) {

      // this.storage.get('ID').then((val) => {
      //   console.log('Your age is', val);
      // });
      //  console.log('this is id 1:',this.id1);
     }

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      InternetHours15: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ])),
      InternetHours30: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ])),
      InternetHours1h: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ])),
      Printing1: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ])),
      Printing2: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ])),
      Printing3: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ])),
      Printing4: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ])),
      PrintingA: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ])),
      PrintingB: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ])),
      PrintingC: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ])),
      PrintingD: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ])),
      Scanner1: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ])),
      Scanner2: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ])),
      Fax: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ])),
      Email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ])),
      Binding: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ])),
   
=======
//   validation_messages = {
//     'InternetHours15': [
//       { type: 'required', message: 'Price is required.' },
//       { type: 'pattern', message: 'Price must be a number.' }
//     ],
//     'InternetHours30': [
//       { type: 'required', message: 'Price is required.' },
//       { type: 'pattern', message: 'Price must be a number.' }
//     ],
//     'InternetHours1h': [
//       { type: 'required', message: 'Price is required.' },
//       { type: 'pattern', message: 'Price must be a number.' }
//     ],
//     'Printing1': [
//       { type: 'required', message: 'Price is required.' },
//       { type: 'pattern', message: 'Price must be a number.' }
//     ],
//     'Printing2': [
//       { type: 'required', message: 'Price is required.' },
//       { type: 'pattern', message: 'Price must be a number.' }
//     ],
//     'Printing3': [
//       { type: 'required', message: 'Price is required.' },
//       { type: 'pattern', message: 'Price must be a number.' }
//     ],
//     'Printing4': [
//       { type: 'required', message: 'Price is required.' },
//       { type: 'pattern', message: 'Price must be a number.' }
//     ],
//     'PrintingA': [
//       { type: 'required', message: 'Price is required.' },
//       { type: 'pattern', message: 'Price must be a number.' }
//     ],
//     'PrintingB': [
//       { type: 'required', message: 'Price is required.' },
//       { type: 'pattern', message: 'Price must be a number.' }
//     ],
//     'PrintingC': [
//       { type: 'required', message: 'Price is required.' },
//       { type: 'pattern', message: 'Price must be a number.' }
//     ],
//     'PrintingD': [
//       { type: 'required', message: 'Price is required.' },
//       { type: 'pattern', message: 'Price must be a number.' }
//     ],
//     'Scanner1': [
//       { type: 'required', message: 'Price is required.' },
//       { type: 'pattern', message: 'Price must be a number.' }
//     ],
//     'Scanner2': [
//       { type: 'required', message: 'Price is required.' },
//       { type: 'pattern', message: 'Price must be a number.' }
//     ],
//    'Fax': [
//      { type: 'required', message: 'Price is required.' },
//      { type: 'pattern', message: 'Price must be a number.' }
//    ],
//    'Email': [
//     { type: 'required', message: 'Price is required.' },
//     { type: 'pattern', message: 'Price must be a number.' }
//   ],
//   'Binding': [
//     { type: 'required', message: 'Price is required.' },
//     { type: 'pattern', message: 'Price must be a number.' }
//   ],
//   'tshirt': [
//     { type: 'required', message: 'Price is required.' },
//     { type: 'pattern', message: 'Price must be a number.' }
//   ],
//  };
//   constructor(private navCtrl: NavController,
//     private authService: AuthenticationService,
//     private formBuilder: FormBuilder) { }

//   ngOnInit() {
//     this.validations_form = this.formBuilder.group({
//       InternetHours15: new FormControl('', Validators.compose([
//         Validators.required,
//         Validators.pattern('^[0-9]+$')
//       ])),
//       InternetHours30: new FormControl('', Validators.compose([
//         Validators.required,
//         Validators.pattern('^[0-9]+$')
//       ])),
//       InternetHours1h: new FormControl('', Validators.compose([
//         Validators.required,
//         Validators.pattern('^[0-9]+$')
//       ])),
//       Printing1: new FormControl('', Validators.compose([
//         Validators.required,
//         Validators.pattern('^[0-9]+$')
//       ])),
//       Printing2: new FormControl('', Validators.compose([
//         Validators.required,
//         Validators.pattern('^[0-9]+$')
//       ])),
//       Printing3: new FormControl('', Validators.compose([
//         Validators.required,
//         Validators.pattern('^[0-9]+$')
//       ])),
//       Printing4: new FormControl('', Validators.compose([
//         Validators.required,
//         Validators.pattern('^[0-9]+$')
//       ])),
//       PrintingA: new FormControl('', Validators.compose([
//         Validators.required,
//         Validators.pattern('^[0-9]+$')
//       ])),
//       PrintingB: new FormControl('', Validators.compose([
//         Validators.required,
//         Validators.pattern('^[0-9]+$')
//       ])),
//       PrintingC: new FormControl('', Validators.compose([
//         Validators.required,
//         Validators.pattern('^[0-9]+$')
//       ])),
//       PrintingD: new FormControl('', Validators.compose([
//         Validators.required,
//         Validators.pattern('^[0-9]+$')
//       ])),
//       Scanner1: new FormControl('', Validators.compose([
//         Validators.required,
//         Validators.pattern('^[0-9]+$')
//       ])),
//       Scanner2: new FormControl('', Validators.compose([
//         Validators.required,
//         Validators.pattern('^[0-9]+$')
//       ])),
//       Fax: new FormControl('', Validators.compose([
//         Validators.required,
//         Validators.pattern('^[0-9]+$')
//       ])),
//       Email: new FormControl('', Validators.compose([
//         Validators.required,
//         Validators.pattern('^[0-9]+$')
//       ])),
//       Binding: new FormControl('', Validators.compose([
//         Validators.required,
//         Validators.pattern('^[0-9]+$')
//       ])),
//       tshirt: new FormControl('', Validators.compose([
//         Validators.required,
//         Validators.pattern('^[0-9]+$')
//       ])),
>>>>>>> 8c9864028ee203a7d9e8d852dfd5b806b237f900
      
//     });
//   }
//   submit(){
    
//   }
//   tryRegister(){
//     this.navCtrl.navigateForward('/suggested-list');
//   }
ngOnInit() {
}


  add(){
    this.arraylist.push({Ihours: this.Ihours, Iprice: this.Iprice});

    console.log(this.arraylist)
    this.Ihours="";
    this.Iprice= 0;
  }
}