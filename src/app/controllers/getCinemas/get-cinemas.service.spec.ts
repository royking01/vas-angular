import { TestBed } from '@angular/core/testing';

import { GetCinemasService } from './get-cinemas.service';

describe('GetCinemasService', () => {
  let service: GetCinemasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCinemasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
