import { TestBed } from '@angular/core/testing';

import { SalleServiceService } from './salle-service.service';

describe('SalleServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SalleServiceService = TestBed.get(SalleServiceService);
    expect(service).toBeTruthy();
  });
});
