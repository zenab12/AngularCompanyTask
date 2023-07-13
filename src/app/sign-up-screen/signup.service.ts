import { Injectable } from '@angular/core';
import { HandleRequestsService } from '../Services/handle-requests.service';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private handleRequests:HandleRequestsService) { }
  
}
