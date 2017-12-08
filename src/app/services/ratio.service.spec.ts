import { TestBed, inject } from '@angular/core/testing';

import { RatioService } from './ratio.service';

describe('RatioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RatioService]
    });
  });

  it('should be created', inject([RatioService], (service: RatioService) => {
    expect(service).toBeTruthy();
  }));
});
