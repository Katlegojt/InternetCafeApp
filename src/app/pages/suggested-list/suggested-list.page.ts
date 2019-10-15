import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from "rxjs/operators";
import { NavController, MenuController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-suggested-list',
  templateUrl: './suggested-list.page.html',
  styleUrls: ['./suggested-list.page.scss'],
})
export class SuggestedListPage implements OnInit {
  public searchControl: FormControl;
  public items: any;
  visible = false;

  constructor(
    private dataService: DataService,
    private navCtrl: NavController,
    private menu: MenuController,
    public afAuth: AngularFireAuth
    
    ) {
    this.searchControl = new FormControl();
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
 
  goToSeeMorePage(){

    
    this.afAuth.user.subscribe((user) => {
      if (user) {
        this.navCtrl.navigateForward('/see-more');
        console.log(this.afAuth.auth.currentUser.uid)
      } else {
         
        this.navCtrl.navigateForward('/login');
      }
    })
  }


  logOut(){

    this.afAuth.auth.signOut();
    this.navCtrl.navigateForward('/login');
  }
  toggle() {
    this.visible = !this.visible;
   }
}
