import { Injectable } from '@angular/core';
import {  
  HttpRequest,  
  HttpHandler,  
  HttpEvent,  
  HttpInterceptor  
} from '@angular/common/http';  
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorClassService implements HttpInterceptor{

  constructor() { }
  
  public intercept(request: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>>{
  
  request = request.clone({
    setHeaders:{
      Authorization:'Bearer abc123'
    }
  });
  
  return next.handle(request);

}
}
