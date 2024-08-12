import { TestBed, inject } from '@angular/core/testing';

import { MadagascarService } from './madagascar.service';

describe('MadagascarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MadagascarService]
    });
  });

  it('should be created', inject([MadagascarService], (service: MadagascarService) => {
    expect(service).toBeTruthy();
  }));
});
