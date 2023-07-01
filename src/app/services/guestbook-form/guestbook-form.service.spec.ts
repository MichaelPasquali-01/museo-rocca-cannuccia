import { TestBed } from '@angular/core/testing';

import { GuestbookFormService } from './guestbook-form.service';

describe('GuestbookFormService', () => {
  let service: GuestbookFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuestbookFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
