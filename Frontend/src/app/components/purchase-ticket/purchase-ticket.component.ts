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
  selected: string;
  states: string[] = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Dakota',
    'North Carolina',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming'
  ];


  user:any;
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
        buyerid: "",
      }
  }

  onSubmit(form: NgForm) {
    confirm("Please confirm to proceed");
      this.purchaseTicketService.postPurchase(form.value).subscribe((res) => {
        this.flashMessage.show('Purchased', { cssClass: 'alert-success', timeout: 4000 });
        this.resetForm1(form);
        
        this.router.navigateByUrl('https://sandbox.payhere.lk/pay/checkout');
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
