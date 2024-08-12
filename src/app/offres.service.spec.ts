import { TestBed, inject } from '@angular/core/testing';

import { OffresService } from './offres.service';

describe('OffresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OffresService]
    });
  });

  it('should be created', inject([OffresService], (service: OffresService) => {
    expect(service).toBeTruthy();
  }));
});
