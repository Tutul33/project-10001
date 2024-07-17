import { TestBed } from '@angular/core/testing';

import { CommonHttpDataService } from './common-http-data.service';

describe('CommonHttpDataService', () => {
  let service: CommonHttpDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonHttpDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
