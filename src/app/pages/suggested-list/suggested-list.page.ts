import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from "rxjs/operators";

@Component({
  selector: 'app-suggested-list',
  templateUrl: './suggested-list.page.html',
  styleUrls: ['./suggested-list.page.scss'],
})
export class SuggestedListPage implements OnInit {

  public searchControl: FormControl;
  public items: any;

  constructor(private dataService: DataService) {
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
  

}
