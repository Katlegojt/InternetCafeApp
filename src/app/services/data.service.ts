import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public items: any = [];

  constructor(private db: AngularFirestore) {
   
  }

  filterItems(searchTerm) {
    return this.items.filter(item => {
      return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

  getItemSnapChanges() {
    return this.db.collection('localCafe').snapshotChanges();
  }
}
