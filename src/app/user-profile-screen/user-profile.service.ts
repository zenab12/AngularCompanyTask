import { Injectable } from '@angular/core';
import { HandleRequestsService } from '../Services/handle-requests.service';

@Injectable({
  providedIn: 'root',
})
export class UserProfileService {
  constructor(private handleRequests: HandleRequestsService) {}
  
  getAll(){
    let countries:any[]=[];
    this.handleRequests.getCountries().subscribe((res: any) => {
      res.data.forEach((element: any) => {
        countries.push(element.countryName);
      });
    });
    
    return countries;
  }
  
  getFiltered(filter:string){
  let countries:any[]=[];
  this.handleRequests.filterCountries(filter).subscribe((res:any)=>{
    res.data.forEach((element:any)=>{
      countries.push(element.countryName);
    });
     
  },(err:any)=>{
    console.log(err.message)
    return false;
  });
  
  return countries;
  }
}
