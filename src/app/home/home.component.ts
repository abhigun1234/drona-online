import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images=['assets/images/python.jpeg',
  'assets/images/python.jpeg','assets/images/angular.jpg',
  'assets/images/python.jpeg',
  'assets/images/angular.jpg',
  'assets/images/python.jpeg',
  'assets/images/angular.jpg',
  'assets/images/python.jpeg']
  constructor(private router:Router) { }

  ngOnInit() {
  }
  /*
  nevegateToCourseDetails is responsible for
  the netvigation of the course details componen
  */
  nevegateToCourseDetails()
  { //alert('hello')
    this.router.navigate(['/course']);
  }
}
