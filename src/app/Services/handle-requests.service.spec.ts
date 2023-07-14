import { TestBed } from '@angular/core/testing';

import { HandleRequestsService } from './handle-requests.service';
import { HttpClient } from '@angular/common/http';

describe('HandleRequestsService', () => {
  let service: HandleRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[ {provide:HttpClient,useValue: jasmine.createSpyObj('HttpClient',['get'])}]
    });
    service = TestBed.inject(HandleRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  // it('countries length is 298',(done:DoneFn)=>{
  //   service.getCountries().subscribe((data)=>{      
  //     expect(data.constructor.length).toBe(298);
  //   })
  // })
});
