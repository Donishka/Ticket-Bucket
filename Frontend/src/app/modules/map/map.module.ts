import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from '../../components/map/map.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../../../environments/environment';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA47KAw6KspzlmDSqtmVZodOu212gJwMAw'
    })

  ],
  declarations: [MapComponent],
  exports:[ MapComponent]
})
export class MapModule { }
