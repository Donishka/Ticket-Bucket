import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AuthService } from './services/auth.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { SigninModule } from './modules/signin/signin.module';
import { SignupModule } from './modules/signup/signup.module';
import { UserAccountModule } from './modules/user-account/user-account.module';
import { EditUserModule } from './modules/user-account/edit-user.module';
import { AppRoutingModule } from './modules/app-routing.module';
import { HeaderBarModule } from './modules/header-bar/header-bar.module';
import { MapModule } from './modules/map/map.module';

import { AgmCoreModule } from '@agm/core';

import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    FlashMessagesModule.forRoot(),
    ModalModule.forRoot(),
    SigninModule,
    SignupModule,
    UserAccountModule,
    EditUserModule,
    HeaderBarModule,
    FormsModule,
    MapModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA47KAw6KspzlmDSqtmVZodOu212gJwMAw'
    }),
    QRCodeModule

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
