import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-see-more',
  templateUrl: './see-more.page.html',
  styleUrls: ['./see-more.page.scss'],
})
export class SeeMorePage implements OnInit {

  itemList;
  constructor(
    private navCtrl: NavController,
    private dataService: DataService
  ) {

    this.dataService.getItemSnapChanges().subscribe(data => {
      this.itemList = data.map ( e => {
        return{
          key: e.payload.doc.id,
          ...e.payload.doc.data()
        } as InternetCafe;
      });
      console.log(this.itemList);
 
     });

   }

  ngOnInit() {
  }
  goToMapPage(){
    this.navCtrl.navigateForward('/map');
  }
  goToPostsPage(){
    this.navCtrl.navigateForward('/posts');
  }
  goToServicesPage(){
    this.navCtrl.navigateForward('/services');
  }

}
