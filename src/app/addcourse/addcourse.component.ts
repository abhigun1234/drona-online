import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators ,FormsModule,NgForm} from '@angular/forms'

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {
addCourseForm:FormGroup;
  constructor(private fb:FormBuilder) { 

    this.addCourseForm=fb.group(
        {
        'name':[null,Validators.required],
        'phone_no':[null,Validators.required],
        'city':[null,Validators.required],
        'country':[null,Validators.required],
        'email':[null,Validators.email],
        'birth_date':[null,Validators.required],
       })
  }

  ngOnInit() {
  }
 onFormSubmit(val:any)
  {
    console.log(val)

  }
}
