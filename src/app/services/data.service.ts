import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public items: any = [];
  uid

  constructor(private db: AngularFirestore,  ) {
   
  }

  filterItems(searchTerm) {
    return this.items.filter(item => {
      return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

  getItemSnapChanges() {
    return this.db.collection('localCafe').snapshotChanges();
    //,ref => ref.where()
  }

  addComments()
  {
    this.db.collection('users').add({
    
    });


  }

  getCafeList(uid)
  {
    
    return this.db.collection('localCafe/'+ uid).snapshotChanges();
   

  }
}
