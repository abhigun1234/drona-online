import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AdduserService {
    headers:HttpHeaders
  constructor(public httpClient :HttpClient) { 
     this.headers = new HttpHeaders();
    this.headers  = this.headers.set('Content-Type', 'application/json; charset=utf-8');
  }

  public adduser(data:any)
  {

      const body = data;
      let options = {
        headers: this.headers
      }; 
    const url='https://dronaonlineadmin.herokuapp.com/registeruser/'
    return this.httpClient.post(url,body,options)
  }
}
