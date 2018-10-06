import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { RouterModule, Routes }  from '@angular/router';

import { UserAccountComponent } from '../../components/user/user-account/user-account.component';
import { HeaderBarModule } from '../header-bar/header-bar.module';
import { PaymentsModule } from '../payments/payments.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlashMessagesModule,
    RouterModule,
    HeaderBarModule,
    PaymentsModule
 ],
  declarations: [
    UserAccountComponent
    
    
  ],
  exports:[
    UserAccountComponent
  ]
})
export class UserAccountModule { }
