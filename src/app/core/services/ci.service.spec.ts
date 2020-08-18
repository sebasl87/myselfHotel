import { TestBed } from '@angular/core/testing';

import { CiService } from './ci.service';

describe('CiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CiService = TestBed.get(CiService);
    expect(service).toBeTruthy();
  });
});
