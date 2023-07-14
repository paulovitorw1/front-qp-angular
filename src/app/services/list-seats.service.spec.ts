import { TestBed } from '@angular/core/testing';

import { ListSeatsService } from './list-seats.service';

describe('ListSeatsService', () => {
  let service: ListSeatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListSeatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
