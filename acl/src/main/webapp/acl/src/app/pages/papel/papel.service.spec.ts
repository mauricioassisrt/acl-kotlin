import { TestBed } from '@angular/core/testing';

import { PapelService } from './papel.service';

describe('PapelService', () => {
  let service: PapelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PapelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
