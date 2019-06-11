import { Injectable } from '@angular/core';
import {HttpUrlConnection} from './httpurlconnection'
import {} from './httpurlconst'
import * as httpconstants from "./httpurlconst";
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public httpConnection:HttpUrlConnection) { }

  public authenticate(data)
  {
    
    return this.httpConnection.connectToApi('post',httpconstants.loginUrl,data)
  }
  //if token present returns true else false
  public logedIn()
  {
    return !!localStorage.getItem("token")
  }
}
