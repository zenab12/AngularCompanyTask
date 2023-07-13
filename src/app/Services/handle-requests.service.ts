import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { debounceTime } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HandleRequestsService {
  url:string='https://anchormt-world-staging-at4dfab73a-lz.a.run.app/countries';
  constructor(private http: HttpClient) {
  
  }
  
  getCountries(){
    const response =  this.http.get(this.url,{headers:{"Authorization":"Bearer abc123"}});
    return response;
    
 }
 
 filterCountries(filter:string){
  const response = this.http.get(`${this.url}/${filter}`,{headers:{"Authorization":"Bearer abc123"}}).pipe(debounceTime(800));
  console.log(response);
  return response; 
 }
 
 
}


