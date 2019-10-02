import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { NavController } from '@ionic/angular';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {

  public searchControl: FormControl;
  public items: any;

  constructor(
    private dataService: DataService,
    private navCtrl: NavController
    
    ) {
    this.searchControl = new FormControl();
  }

  ngOnInit() {
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
 
  goToCommentsPage(){
    this.navCtrl.navigateForward('/comments');
  }

}
