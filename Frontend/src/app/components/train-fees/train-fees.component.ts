import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

import { Charge } from '../../services/charges/charges.model';
import { ChargesService } from '../../services/charges/charges.service';

declare var M: any;

@Component({
  selector: 'app-train-fees',
  templateUrl: './train-fees.component.html',
  styleUrls: ['./train-fees.component.css'],
  providers: [ChargesService]
})
export class TrainFeesComponent implements OnInit {

  constructor(public chargesService: ChargesService,
    private flashMessage: FlashMessagesService,
    private router: Router) { }

  ngOnInit() {
    this.refreshChargesList();
  }


  refreshChargesList() {
    this.chargesService.getChargeList().subscribe((res) => {
      this.chargesService.charge = res as Charge[];
    });
  }

}
