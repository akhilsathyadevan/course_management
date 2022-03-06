import { Injectable } from '@angular/core';
import { Injector } from '@angular/core';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class TokeninterceptorService {

  constructor(private injector:Injector) { }
  intercept(req:any,nxt:any)
  {
    let authService = this.injector.get(AuthService)
    let tokenizedReq = req.clone(
      {
        setHeaders:{
          Authorization:`Bearer ${authService.getToken()}`
        }
      }
    )
    return nxt.handle(tokenizedReq)

  }
}
