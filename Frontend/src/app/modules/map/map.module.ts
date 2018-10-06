import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from '../../components/map/map.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../../../environments/environment';

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  ],
  declarations: [MapComponent],
  exports:[ MapComponent]
})
export class MapModule { }
