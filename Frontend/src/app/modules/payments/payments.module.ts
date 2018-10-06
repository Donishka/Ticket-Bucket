import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { RouterModule, Routes } from '@angular/router';

import { PurchaseTicketComponent } from '../../../app/components/purchase-ticket/purchase-ticket.component';
import { TrainFeesComponent } from '../../components/train-fees/train-fees.component';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlashMessagesModule,
    RouterModule,
    QRCodeModule,
    
  ],
  declarations: [PurchaseTicketComponent, TrainFeesComponent
  ],
  exports: [PurchaseTicketComponent, TrainFeesComponent],
})
export class PaymentsModule { }
