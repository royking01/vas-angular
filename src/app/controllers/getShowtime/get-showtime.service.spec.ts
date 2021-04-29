import { TestBed } from '@angular/core/testing';

import { GetShowtimeService } from './get-showtime.service';

describe('GetShowtimeService', () => {
  let service: GetShowtimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetShowtimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
