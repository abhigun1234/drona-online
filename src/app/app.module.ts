import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card'
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component'
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { LoginComponent } from './login/login.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { AppRoutingModule } from '..//app/app-routing/app-routing.module';
import {ReactiveFormsModule} from '@angular/forms'
import {FormsModule} from '@angular/forms';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component'
import {HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http'
import {AuthGuard} from './auth.guard'
import { HttpinteceptorService} from '..//app/httpinteceptor.service';
import { DronahomeComponent } from './dronahome/dronahome.component'
import {MatIconModule} from '@angular/material/icon';
import { AdminComponent } from './admin/admin/admin.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import {MatFormFieldModule  } from '@angular/material/form-field';
import {MatInputModule } from '@angular/material';
import { MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CourseComponent,
    LoginComponent,
    RegisteruserComponent,
    CoursedetailsComponent,
    DronahomeComponent,
    AdminComponent,
    AddcourseComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    VgCoreModule,
    VgControlsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatMenuModule,
    MatListModule,
    BrowserAnimationsModule
  
  ],
  providers: [AuthGuard,{provide:HTTP_INTERCEPTORS,useClass:HttpinteceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
