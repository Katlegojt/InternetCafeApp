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
    'InternetHours': [
      { type: 'required', message: 'Price is required.' },
      { type: 'pattern', message: 'Enter a valid price.' }
    ],
    'Printing': [
      { type: 'required', message: 'Price is required.' },
      { type: 'pattern', message: 'Enter a valid price.' }
    ],
    'Scanner': [
      { type: 'required', message: 'Price is required.' },
      { type: 'pattern', message: 'Enter a valid price.' }
    ],
   'Fax': [
     { type: 'required', message: 'Price is required.' },
     { type: 'pattern', message: 'Enter a valid price.' }
   ],
   'Email': [
    { type: 'required', message: 'Price is required.' },
    { type: 'pattern', message: 'Enter a valid price.' }
  ],
  'Binding': [
    { type: 'required', message: 'Price is required.' },
    { type: 'pattern', message: 'Enter a valid price.' }
  ],
 };
  constructor(private navCtrl: NavController,
    private authService: AuthenticationService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      InternetHours: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9-]')
      ])),
      Printing: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z]+$')
      ])),
      Scanner: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z]+$')
      ])),
      Fax: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      Email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z]+$')
      ])),
      Binding: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z]+$')
      ])),
      
    });
  }
  submit(){
    
  }

}
