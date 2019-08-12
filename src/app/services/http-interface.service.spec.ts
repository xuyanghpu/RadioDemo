import { TestBed } from '@angular/core/testing';

import { HttpInterfaceService } from './http-interface.service';

describe('HttpInterfaceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpInterfaceService = TestBed.get(HttpInterfaceService);
    expect(service).toBeTruthy();
  });
});
