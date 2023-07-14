import { TestBed } from '@angular/core/testing';

import { InterceptorClassService } from './interceptor-class.service';
import { HttpClient } from '@angular/common/http';

describe('InterceptorClassService', () => {
  let service: InterceptorClassService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[ {provide:HttpClient,useValue: jasmine.createSpyObj('HttpClient',['get'])}]

    });
    service = TestBed.inject(InterceptorClassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
