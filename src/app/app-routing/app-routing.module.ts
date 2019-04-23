import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent}  from '..//login/login.component'
import {RegisteruserComponent} from '..//registeruser/registeruser.component'
import {HomeComponent} from '..//home/home.component'
import {CourseComponent} from '..//course/course.component'
const routes: Routes = [{path:"",component:LoginComponent}
,{path:"register",component:RegisteruserComponent}
,{path:"home",component:HomeComponent}
,{path:"course",component:CourseComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}