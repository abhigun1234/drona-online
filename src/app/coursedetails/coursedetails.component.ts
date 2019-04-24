import { Component, OnInit } from '@angular/core';
import {CourseService} from '..//course.service'
@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css']
})
export class CoursedetailsComponent implements OnInit {

  constructor(private course:CourseService) { }

  ngOnInit() {
  }
  public getCourseDetails()
  {

  this.course.getCourseDetails().subscribe(res=>{

    console.log(res)
  })
  }

}
