import { TestBed } from '@angular/core/testing';

import { ListPassageService } from './list-passage.service';

describe('ListPassageService', () => {
  let service: ListPassageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListPassageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
