import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if(request.url !="https://localhost:7047/api/User/Register" || "https://localhost:7047/api/User/Login"){
      request = request.clone({
        setHeaders:{
          'Content-Type':'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem("token")
        }
      })
      console.log("requete lancee!:)");

    }

    return next.handle(request);
  }
}
