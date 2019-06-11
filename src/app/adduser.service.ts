import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {HttpHeaders} from '@angular/common/http'
import * as httpconstants from "./httpurlconst";
import {HttpUrlConnection} from './httpurlconnection'
@Injectable({
  providedIn: 'root'
})
export class AdduserService {
    headers:HttpHeaders
  constructor(public httpClient :HttpClient,public httpUrlConnection:HttpUrlConnection) { 
     this.headers = new HttpHeaders();
    this.headers  = this.headers.set('Content-Type', 'application/json; charset=utf-8');
  }

  public adduser(data:any)
  {

      /*const body = data;
      let options = {
        headers: this.headers
      };*/
      
      
    //const url='https://dronaonlineadmin.herokuapp.com/registeruser/'
    
    //return this.httpClient.post(httpconstants.registerUrl,body,options)
     return this.httpUrlConnection.connectToApi('post',httpconstants.coursesUrl,data)
  }
}
