import { TestBed, inject } from '@angular/core/testing';

import { HttpinteceptorService } from './httpinteceptor.service';

describe('HttpinteceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpinteceptorService]
    });
  });

  it('should be created', inject([HttpinteceptorService], (service: HttpinteceptorService) => {
    expect(service).toBeTruthy();
  }));
});
