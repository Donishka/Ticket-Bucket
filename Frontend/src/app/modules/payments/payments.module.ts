import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { RouterModule, Routes } from '@angular/router';
import { TypeaheadModule } from 'ngx-bootstrap';


import { PurchaseTicketComponent } from '../../../app/components/purchase-ticket/purchase-ticket.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlashMessagesModule,
    RouterModule,
    TypeaheadModule.forRoot(),

  ],
  declarations: [PurchaseTicketComponent],
  exports: [PurchaseTicketComponent],
})
export class PaymentsModule { }
