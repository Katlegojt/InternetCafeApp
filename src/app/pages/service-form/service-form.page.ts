import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NavController } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.page.html',
  styleUrls: ['./service-form.page.scss'],
})
export class ServiceFormPage implements OnInit {
  validations_form: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';
 
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
  constructor(private navCtrl: NavController,
    private authService: AuthenticationService,
    private formBuilder: FormBuilder) { }

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
      
    });
  }
  submit(){
    
  }

}
