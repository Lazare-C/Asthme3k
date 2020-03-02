import { TestBed } from '@angular/core/testing';

import { RandnumService } from './randnum.service';

describe('RandnumService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RandnumService = TestBed.get(RandnumService);
    expect(service).toBeTruthy();
  });
});
