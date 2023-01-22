import { TestBed } from '@angular/core/testing';

import { DonecheckoutService } from './donecheckout.service';

describe('DonecheckoutService', () => {
  let service: DonecheckoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonecheckoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
