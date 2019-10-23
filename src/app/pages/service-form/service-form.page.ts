import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NavController } from '@ionic/angular';
import { GeoService } from 'src/app/services/geo.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.page.html',
  styleUrls: ['./service-form.page.scss'],
})
export class ServiceFormPage implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  validations_form: FormGroup;
  

  Ihours: "";
  Iprice: 0;

  arraylist: Array <{Ihours :string , Iprice: number}>=[];
    
}
