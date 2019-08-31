import { TestBed, inject } from '@angular/core/testing';

import { CasoDeUsoService } from './caso-de-uso.service';

describe('CasoDeUsoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CasoDeUsoService]
    });
  });

  it('should be created', inject([CasoDeUsoService], (service: CasoDeUsoService) => {
    expect(service).toBeTruthy();
  }));
});
