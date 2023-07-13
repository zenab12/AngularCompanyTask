import { Injectable } from '@angular/core';
import { HandleRequestsService } from '../Services/handle-requests.service';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationService {

  constructor(private handleRequests:HandleRequestsService) { }
}
