import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from "rxjs/operators";
import { NavController, MenuController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

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

  constructor(
    private dataService: DataService,
    private navCtrl: NavController,
    private menu: MenuController,
    public afAuth: AngularFireAuth,
    private route: Router
    
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
//  add(item){
//   this.route.navigate(['/edit'],{queryParams:{name: item.name,price:item.price,type:item.type,key:item.key}})
// }
  goToSeeMorePage(item){
   
    this.afAuth.user.subscribe((user) => {
      if (user) {
        // this.navCtrl.navigateForward('/see-more');
        this.route.navigate(['/see-more'],{queryParams:{name:item.name}})
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
