import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-see-more',
  templateUrl: './see-more.page.html',
  styleUrls: ['./see-more.page.scss'],
})
export class SeeMorePage implements OnInit {
objectA={
  name:'',

}
  itemList;
  constructor(
    private navCtrl: NavController,
    private dataService: DataService,
    private route:ActivatedRoute
  ) {

  

   }

  ngOnInit() {
    this.route.queryParams.subscribe(data=>{
      console.log(data);
      this.objectA.name=data.name;
    
       console.log(data.name);
      // this.price;
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

}
