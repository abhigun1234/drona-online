import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent}  from '..//login/login.component'
import {RegisteruserComponent} from '..//registeruser/registeruser.component'
import {HomeComponent} from '..//home/home.component'
import {CourseComponent} from '..//course/course.component'
import {CoursedetailsComponent} from '..//coursedetails/coursedetails.component'
import {AuthGuard} from '..//auth.guard'
import {DronahomeComponent} from '..//dronahome/dronahome.component'
const routes: Routes = [{path:"",component:DronahomeComponent}
,{path:"register",component:RegisteruserComponent}
,{path:"home",component:HomeComponent,canActivate:[AuthGuard]}
,{path:"course",component:CourseComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}