import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

import { PurchaseTicketService } from '../../services/purchase-ticket-service/purchase-ticket.service';
import { Purchase } from '../../services/purchase-ticket-service/purchase-ticket.model';

@Component({
  selector: 'app-view-purchases',
  templateUrl: './view-purchases.component.html',
  styleUrls: ['./view-purchases.component.css'],
  providers:[PurchaseTicketService]
})
export class ViewPurchasesComponent implements OnInit {

  constructor(public purchaseTicketService: PurchaseTicketService,
    private flashMessage: FlashMessagesService,
    private router: Router) { }

  ngOnInit() {
    this.refreshChargesList();
  }

  refreshChargesList() {
    this.purchaseTicketService.getPurchaseList().subscribe((res) => {
      this.purchaseTicketService.purchase = res as Purchase[];
    });
  }

}
