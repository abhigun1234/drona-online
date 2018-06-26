import { Component, OnInit ,ViewChild} from '@angular/core';
import {VgAPI} from 'videogular2/core';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  api:VgAPI;
  toggleVideo(event: any) {
      
  }
  constructor() { }

  ngOnInit() {
  }
  onPlayerReady(api: VgAPI) {
    this.api = api;
    //alert('onPlayerReady');
    this.api.getDefaultMedia().subscriptions.loadedMetadata.subscribe(
        this.playVideo.bind(this)
      
    );
}

playVideo() {
  //alert('playVideo');
   this.api.play();
}

}
