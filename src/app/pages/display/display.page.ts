import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DisplayServiceService } from 'src/app/services/display-service.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.page.html',
  styleUrls: ['./display.page.scss'],
})
export class DisplayPage implements OnInit {


  constructor(private router: ActivatedRoute,private service: DisplayServiceService,private route: Router) { 

 
  }
 

  ngOnInit() {

}
}

