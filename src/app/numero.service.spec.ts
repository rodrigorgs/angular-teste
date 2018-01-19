import { TestBed, inject } from '@angular/core/testing';

import { NumeroService } from './numero.service';

describe('NumeroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NumeroService]
    });
  });

  it('should be created', inject([NumeroService], (service: NumeroService) => {
    expect(service).toBeTruthy();
  }));
});
