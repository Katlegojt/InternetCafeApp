import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { GeoService } from 'src/app/services/geo.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  title = 'Internet Cafe location';
  lat :number;
  lng :number;

  markers: any;


  constructor( private geo: GeoService) { 
this.geo.dummyMethod();

  }

  ngOnInit() {
    this.getUSerLocation();

    this.geo.hits.subscribe(hits => this.markers = hits)
  }

  private getUSerLocation(){
    
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;

        this.geo.getLocations(500, [this.lat, this.lng])

      })
    }
  }

  

  onClickLocation(event){
   this.geo.setLocation('locations', [event.coords.lat, event.coords.lng]);
    console.log(event);
  }

}
