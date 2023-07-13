import { TestBed } from '@angular/core/testing';

import { HandleRequestsService } from './handle-requests.service';

describe('HandleRequestsService', () => {
  let service: HandleRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandleRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
