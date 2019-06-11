import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import {AuthserviceService} from './authservice.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _authService:AuthserviceService,private _router:Router)
{}

  canActivate():boolean
  {  var data=this._authService.logedin()
    console.log(data)  
    if(this._authService.logedin())
      { alert('hello')
        return true
      }
      else
      { alert('else')
        this._router.navigate(['/login'])
        return false
      }
  }
}
