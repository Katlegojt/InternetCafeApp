import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NavController, AlertController } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.page.html',
  styleUrls: ['./service-form.page.scss'],
})
export class ServiceFormPage implements OnInit {

  Ihours: "";
  Iprice: 0;
  arraylist: Array <{Ihours :string , Iprice: number }>=[];

  Printinghours: "";
  Printingprice: 0;
  Printinglist: Array <{ Printinghours:String,Printingprice:number}>=[];

  Scannerhours:"";
  Scannerprice: 0;
  scannerlist: Array <{ Scannerhours:string,Scannerprice:number}>=[];

  Faxhours:"";
  Faxprice: 0;
  Faxlist: Array <{Faxhours:string,Faxprice:number}>=[];

  Emailhours:"";
  Emailprice: 0;
  Emaillist: Array <{Emailhours:String,Emailprice:number}>=[];

  Bindinghours:"";
  Bindingprice: 0;
  Bindinglist: Array<{ Bindinghours:String,Bindingprice: number}>=[];
  
  constructor(private alert:AlertController) { }
    
//   validations_form: FormGroup;
//   errorMessage: string = '';
//   successMessage: string = '';
 
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
    this.Printinglist.push({Printinghours:this.Printinghours,Printingprice:this.Printingprice});
    this.scannerlist.push({Scannerhours:this.Scannerhours,Scannerprice:this.Scannerprice});
    this.Faxlist.push({Faxhours:this.Faxhours,Faxprice:this.Faxprice});
    this.Emaillist.push({Emailhours:this.Emailhours,Emailprice:this.Emailprice});
    this.Bindinglist.push({ Bindinghours:this.Bindinghours,Bindingprice:this.Bindingprice,});
    console.log(this.arraylist)
    this.Ihours="";
    this.Iprice= 0;
    console.log(this.Printinglist)
    this.Printinghours = "";
    this.Printingprice = 0;
    console.log( this.scannerlist)
    this.Scannerhours ="";
    this.Scannerprice = 0;
    console.log(this.Faxlist)
    this. Faxhours ="";
    this.Faxprice =  0;
    console.log( this.Emaillist)
    this.Emailhours = "";
    this.Emailprice = 0;
    console.log(this.Bindinglist)
    this.Bindinghours = "";
    this.Bindingprice = 0;
  }
  add0(){
    this.arraylist.push({Ihours: this.Ihours, Iprice: this.Iprice});

    console.log(this.arraylist)
    this.Ihours="";
    this.Iprice= 0;
  }
  add1(){
    this.Printinglist.push({Printinghours:this.Printinghours,Printingprice:this.Printingprice});

    console.log(this.Printinglist)
    this.Printinghours = "";
    this.Printingprice = 0;
  }
  add2(){
    this.scannerlist.push({Scannerhours:this.Scannerhours,Scannerprice:this.Scannerprice});

    console.log( this.scannerlist)
    this.Scannerhours ="";
    this.Scannerprice = 0;
  }
  add3(){
    this.Faxlist.push({Faxhours:this.Faxhours,Faxprice:this.Faxprice});

    console.log(this.Faxlist)
    this. Faxhours ="";
    this.Faxprice =  0;
  }
  add4(){
    this.Emaillist.push({Emailhours:this.Emailhours,Emailprice:this.Emailprice});

    console.log( this.Emaillist)
    this.Emailhours = "";
    this.Emailprice = 0;
  }
  add5(){
    this.Bindinglist.push({ Bindinghours:this.Bindinghours,Bindingprice:this.Bindingprice,});

    console.log(this.Bindinglist)
    this.Bindinghours = "";
    this.Bindingprice = 0;
  }
}