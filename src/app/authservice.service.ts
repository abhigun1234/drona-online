import { Injectable } from '@angular/core';
import {HttpUrlConnection} from './/httpurlconnection'
import * as httpconstants from "./httpurlconst";

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private httpUrlconnection :HttpUrlConnection) { }

  authenticate(data:any)
  { return this.httpUrlconnection.connectToApi('post',httpconstants.loginUrl,data)

  }
  //checking the token is present or not
  public logedin()
  {
    return !!localStorage.getItem("token")
  }
  public getToken()
  {

    return localStorage.getItem("token")
  }
}
