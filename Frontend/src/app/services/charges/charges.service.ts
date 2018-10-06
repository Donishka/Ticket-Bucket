import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
 

import { Charge } from './charges.model';


@Injectable()
export class ChargesService {
  selectedCharge: Charge;
  charge: Charge[];
  readonly baseURL = 'http://localhost:4201/charges';

  constructor(private http: HttpClient) { }

  postCharge(charge: Charge) {
    return this.http.post(this.baseURL, charge);
  }

  getChargeList() {
    return this.http.get(this.baseURL);
  }

  putCharge(charge: Charge) {
    return this.http.put(this.baseURL + `/${charge._id}`, charge);
  }

  deleteCharge(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}