import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { debounceTime } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HandleRequestsService {
  url:string='https://anchormt-world-staging-at4dfab73a-lz.a.run.app/countries';
  constructor(private http: HttpClient) {}
  
  getCountries(){
    return  this.http.get(this.url)
    }
 
 filterCountries(filter:string){
  return this.http.get(`${this.url}/${filter}`).pipe(debounceTime(800)); 
 }
 
 
}


