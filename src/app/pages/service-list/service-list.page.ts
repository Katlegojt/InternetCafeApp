import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.page.html',
  styleUrls: ['./service-list.page.scss'],
})
export class ServiceListPage implements OnInit {
  uid
  itemList
  constructor(private afAuth:AngularFireAuth, private dataService: DataService) { 

    this.uid = this.afAuth.auth.currentUser.uid;
    this.dataService.getCafeList(this.uid).subscribe(data => {

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

}
