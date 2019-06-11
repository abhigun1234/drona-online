import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import {AuthserviceService} from '..//authservice.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   authData;
  loginForm=new FormGroup({username:new FormControl("abc",Validators.required),password:new FormControl()})
  constructor(private authService:AuthserviceService) { }

  ngOnInit() {
  }
  public login()
  { 
    
    this.authService.authenticate(this.loginForm.value).subscribe(res=>{
    console.log(res)
    this.authData=res
    console.log("token is ",this.authData.access_token)
    localStorage.setItem("token" ,this.authData.access_token)
  })
    console.log(this.loginForm.value)
  }

}
