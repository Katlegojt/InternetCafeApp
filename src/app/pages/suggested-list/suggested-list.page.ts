import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from "rxjs/operators";
import { NavController, MenuController,AlertController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { InternetCafe } from 'src/app/modules/internetCafe';

@Component({
  selector: 'app-suggested-list',
  templateUrl: './suggested-list.page.html',
  styleUrls: ['./suggested-list.page.scss'],
})
export class SuggestedListPage implements OnInit {
  public searchControl: FormControl;
  public items: any;
  visible = false;
  itemList;
  item={
    name:'',
    address:'',
    phone:'',
    email:'',
    from:'',
    to:'',
    img:'',
    url:'',
   
  }

  constructor(
    private dataService: DataService,
    private navCtrl: NavController,
    private menu: MenuController,
    public afAuth: AngularFireAuth,
    private route: Router,
    public alertCtrl:AlertController,
    
    ) {
    this.searchControl = new FormControl();
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
    this.menu.swipeEnable(false);
    this.setFilteredItems("");

    this.searchControl.valueChanges
       .pipe(debounceTime(700))
      .subscribe(search => {
        this.setFilteredItems(search);
      });
  }

  setFilteredItems(searchTerm) {
    this.items = this.dataService.filterItems(searchTerm);
  }

  pinLocation(item){
    this.route.navigate(['/map2'],{queryParams:{
      key : item.key
      }})
  }

  goToSeeMorePage(item){
   
    
       
        this.route.navigate(['/see-more'],{queryParams:{
          key : item.key,
          name:item.name,
          address:item.address,
          phone:item.phone,
          email:item.email,
          from:item.from,
          to: item.to,
          img :item.img,
          URL:item.URL

          }})
       
     

  }


  logOut(){

    this.afAuth.auth.signOut();
    // this.navCtrl.navigateForward('/login');
    
  }
  toggle() {
    this.visible = !this.visible;
   }
   async presentPrompt() {
    const alert = await this.alertCtrl.create({
      header: 'Access denied',
      message: 'To access more information, you have to log in first',
     
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('cancelled');
          }
        }, {
          text: 'okay',
          handler: () => {
            this.navCtrl.navigateForward('/login');
            console.log(name);
          }
        }
      ]
    });

    await alert.present();
  }
 
}
