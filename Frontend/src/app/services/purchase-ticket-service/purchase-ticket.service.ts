import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
//import { Observable } from 'rxjs/Observable';
// 
// 

import { Purchase } from './purchase-ticket.model';

@Injectable()
export class PurchaseTicketService {
  selectedPurchase: Purchase;
  purchase: Purchase[];
  readonly baseURL = 'http://localhost:4201/purchases';

  constructor(private http: HttpClient) { }

  postPurchase(purchase: Purchase) {
    console.log(purchase);
    return this.http.post(this.baseURL, purchase);
  }

  getPurchaseList() {
    return this.http.get(this.baseURL);
  }

  putPurchase(purchase: Purchase) {
    return this.http.put(this.baseURL + `/${purchase._id}`, purchase);
  }

  deletePurchase(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
