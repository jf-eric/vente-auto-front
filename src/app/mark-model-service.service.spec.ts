import { TestBed, inject } from '@angular/core/testing';

import { MarkModelServiceService } from './mark-model-service.service';

describe('MarkModelServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarkModelServiceService]
    });
  });

  it('should be created', inject([MarkModelServiceService], (service: MarkModelServiceService) => {
    expect(service).toBeTruthy();
  }));
});
