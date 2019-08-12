import { TestBed } from '@angular/core/testing';

import { CountServiceService } from './count-service.service';

describe('CountServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountServiceService = TestBed.get(CountServiceService);
    expect(service).toBeTruthy();
  });
});
