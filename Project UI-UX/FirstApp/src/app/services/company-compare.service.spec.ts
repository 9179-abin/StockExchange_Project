import { TestBed } from '@angular/core/testing';

import { CompanyCompareService } from './company-compare.service';

describe('CompanyCompareService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompanyCompareService = TestBed.get(CompanyCompareService);
    expect(service).toBeTruthy();
  });
});
