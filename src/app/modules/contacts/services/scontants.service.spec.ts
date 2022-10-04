import { TestBed } from '@angular/core/testing';

import { SContantsService } from './scontants.service';

describe('SContantsService', () => {
  let service: SContantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SContantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
