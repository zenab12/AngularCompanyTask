import { Injectable } from '@angular/core';
import { HandleRequestsService } from '../Services/handle-requests.service';
import { error } from 'protractor';

@Injectable({
  providedIn: 'root',
})
export class UserProfileService {
  constructor(private handleRequests: HandleRequestsService) {}

  getAll(){
    const countries:any[]=[];
    this.handleRequests.getCountries().subscribe((res: any) => {
      res.data.forEach((element: any) => {
        countries.push(element.countryName);
      });
    });

    return countries;
  }

  getFiltered(filter:string):string[]{
  const countries:string[]=[];
  this.handleRequests.filterCountries(filter).subscribe((res:any)=>{
    res.data.forEach((element:any)=>{
      countries.push(element.countryName);
    });

  },(err)=>{
    return false;
  });

  return countries;
  }
}
