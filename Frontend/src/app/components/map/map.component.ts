import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  qlng: any;
  qlat: any;

  items: Observable<any>;
  
  constructor(private db: AngularFireDatabase,
    private router: Router) { 
    this.items = db.object('position').valueChanges();
    this.qlng = db.object('position/longitude').valueChanges();
    this.qlat = db.object('position/longitude').valueChanges();
    
    console.log("sdfsadf"+JSON.stringify(this.items));
  }

  ngOnInit() {
    this.reload();
  }

  reload(){
    this.router.navigateByUrl('/view-map');
  }

}
