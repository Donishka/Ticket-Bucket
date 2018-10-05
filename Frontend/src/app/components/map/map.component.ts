import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  items: Observable<any>;
  
  constructor(private db: AngularFireDatabase) { 
    this.items = db.object('position').valueChanges();
    console.log("sdfsadf"+JSON.stringify(this.items));
  }

  ngOnInit() {
  }

}
