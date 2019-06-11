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
        'fees':[null,Validators.required],
        'duration':[null,Validators.required],
        'description':[null,Validators.required],
        'vedioUrl':[null,Validators.required],
        'imageUrl':[null,Validators.required]
      })
  }

  ngOnInit() {
  }
 onFormSubmit(val:any)
  {
    console.log(val)

  }
}
