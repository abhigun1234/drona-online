import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'
import {AdduserService} from '..//adduser.service'
@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent implements OnInit {
cities=['Hydrabaad','pune','mumbai','jaipur','bangloru']
userForm=new FormGroup({name:new FormControl(),
  email:new FormControl(),
  country: new FormControl(),
  birth_date:new FormControl(),
  city:new FormControl(),
  phone_no:new FormControl()})
  constructor(public adduser:AdduserService) { }

  ngOnInit() {
  }
  onSubmit(val:any)
  {
    console.log(val)
    this.adduser.adduser(val).subscribe(response=>{
      console.log(response)
    })

  }
}
