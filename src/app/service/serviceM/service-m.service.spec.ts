import { TestBed } from '@angular/core/testing';

import { ServiceMService } from './service-m.service';

describe('ServiceMService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceMService = TestBed.get(ServiceMService);
    expect(service).toBeTruthy();
  });
});
