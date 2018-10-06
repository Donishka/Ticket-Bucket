import { TestBed, inject } from '@angular/core/testing';

import { PurchaseTicketService } from './purchase-ticket.service';

describe('PurchaseTicketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PurchaseTicketService]
    });
  });

  it('should be created', inject([PurchaseTicketService], (service: PurchaseTicketService) => {
    expect(service).toBeTruthy();
  }));
});
