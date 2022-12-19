import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VideoService } from 'src/app/services/video.service';
import { HttpClient } from '@angular/common/http';
import { videoModel } from 'src/app/models/videoModel';


@Component({
  selector: 'app-singlevideo',
  templateUrl: './singlevideo.component.html',
  styleUrls: ['./singlevideo.component.css']
})
export class SinglevideoComponent implements OnInit {

  displayVideoArray!:Array<any>

  videoDetails: videoModel[] = [];
  videoDetail = {
    title: '',
    desc: '',
    video:'' ,
    category:'' ,
    author: '',
  };


  constructor(

    private videoServices: VideoService,
    private http: HttpClient,
    private router:Router
  ) { this.displayVideoArray=[];}

  ngOnInit(): void {
    let videoId = localStorage.getItem('editVideoId');
    this.videoServices.getVideo(videoId).subscribe((data) => {
      this.videoDetail = JSON.parse(JSON.stringify(data));
    });


  }

    // delete a video
    deleteVideo(videoData: any) {
      this.videoServices.deleteVideo(videoData._id).subscribe((data) => {
        this.videoDetails = this.videoDetails.filter(
          (video) => video !== videoData
        );
        alert("video deleted")
        this.router.navigate(['dashboard'])
      });
    }

    //rating
    rate(){
      this.router.navigate(['dashboard/rating'])
    }
}
