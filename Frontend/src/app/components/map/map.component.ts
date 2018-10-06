import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  
  lat: number = 6.9021297;
  lng: number = 79.8610308;

  items: Observable<any>;

  
  constructor(private db: AngularFireDatabase) { 
    db.object('/position').valueChanges()
    .subscribe(res => {
      this.lat = res.latitude;
      this.lng = res.longitude;
    });
  }

  ngOnInit() {
  }

}
