import { TestBed } from '@angular/core/testing';

import { EducacionServiceService } from './educacion-service.service';

describe('EducacioServiceService', () => {
  let service: EducacionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EducacionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
