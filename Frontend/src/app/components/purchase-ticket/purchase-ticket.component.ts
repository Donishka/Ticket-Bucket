import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

import { PurchaseTicketService } from '../../services/purchase-ticket-service/purchase-ticket.service';

declare var M: any;
@Component({
  selector: 'app-purchase-ticket',
  templateUrl: './purchase-ticket.component.html',
  styleUrls: ['./purchase-ticket.component.css'],
  providers:[PurchaseTicketService]
})
export class PurchaseTicketComponent implements OnInit {
  user:any;
  ticketDetails:any=null;
  arr:any[];
  qrMsg: String="Sample";

  today: number = Date.now();
  time:any;
  constructor(
    
    public purchaseTicketService: PurchaseTicketService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.resetForm();
    this.getProfileDetails(); 
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.purchaseTicketService.selectedPurchase = {
      _id: "",
      start: "",
      end: "",
      date: "",
      time: "",
      class: "",
      cost: "",
      qty:"",
      buyerid: "",

    }
  }
  resetForm1(form?: NgForm) {
    if (form)
      this.purchaseTicketService.selectedPurchase = {
        _id: "",
        start: "",
        end: "",
        date: "",
        time: "",
        class: "",
        cost: "",
        qty:"",
        buyerid: "",
      }
  }

  onSubmit(form: NgForm) {
    confirm("Please confirm to proceed");
      this.purchaseTicketService.postPurchase(form.value).subscribe((res) => {
        this.flashMessage.show('Purchased', { cssClass: 'alert-success', timeout: 4000 });
        this.resetForm1(form);
        this.qrMsg =  " Start station:"+form.value.start+
                      " End station: "+form.value.end+
                      " Date: "+form.value.date+
                      " Price: 135"+
                      " time: " + form.value.time+
                      " id: "+form.value.buyerid+
                      " class: "+form.value.class+
                      " Qty: " + form.value.qty ;

        this.ticketDetails=this.qrMsg;
        this.arr = ["Start station : " + form.value.start,
          " End station : " + form.value.end ,
          " Date : " + form.value.date ,
          " Price : 135",
          " time: "+form.value.time,
          " class : " + form.value.class,
          " Qty: " + form.value.qty];
        });
  }

  getProfileDetails() {
    console.log('get details');
    this.authService.getProfile().subscribe(res => {
      this.user = res.data.user;
      console.log(this.user);
    });
  }

}
