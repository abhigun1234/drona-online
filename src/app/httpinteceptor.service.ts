import { Injectable } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http'
import {AuthserviceService} from '..//app/authservice.service'
@Injectable({
  providedIn: 'root'
})
export class HttpinteceptorService  implements HttpInterceptor{

  constructor(public authService:AuthserviceService) { }
  intercept(req,next)
  {
      let tokenizedReq=req.clone({seHeaders:{
          Autherization:'Bearer ${authService.getToken()}'
      }})
   return next.handle(tokenizedReq)
  }
}
