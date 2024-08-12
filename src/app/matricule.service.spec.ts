import { TestBed, inject } from '@angular/core/testing';

import { MatriculeService } from './matricule.service';

describe('MatriculeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatriculeService]
    });
  });

  it('should be created', inject([MatriculeService], (service: MatriculeService) => {
    expect(service).toBeTruthy();
  }));
});
