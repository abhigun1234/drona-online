import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card'
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component'
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,MatCardModule,
    RouterModule.forRoot([{path:'course',component:CourseComponent},
    {path:'home',component:HomeComponent},
    {path:'',component:HomeComponent}]),
    VgCoreModule,
    VgControlsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
