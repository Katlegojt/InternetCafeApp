import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-see-more',
  templateUrl: './see-more.page.html',
  styleUrls: ['./see-more.page.scss'],
})
export class SeeMorePage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
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
