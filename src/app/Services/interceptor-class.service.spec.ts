import { TestBed } from '@angular/core/testing';

import { InterceptorClassService } from './interceptor-class.service';

describe('InterceptorClassService', () => {
  let service: InterceptorClassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterceptorClassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
