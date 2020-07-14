import { TestBed } from '@angular/core/testing';

import { PadawanService } from './padawan.service';

describe('PadawanService', () => {
  let service: PadawanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PadawanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
