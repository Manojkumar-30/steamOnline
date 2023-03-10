import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-uploadvideo',
  templateUrl: './uploadvideo.component.html',
  styleUrls: ['./uploadvideo.component.css']
})
export class UploadvideoComponent implements OnInit {

  displayVideo!: boolean;
  displayVideoArray!: Array<any>;
  @ViewChild('singleInput', { static: false })
  singleInput!: ElementRef;
  thumbnailInput!: ElementRef;
  subtitleInput!: ElementRef;

  videos: any;
  title:string = ""
  desc:string = ""
  category:string = ""
  author:string = ""
  subtitle: any;
  thumbnail:any

  p: any;
  constructor(private Videoupload: VideoService, private http: HttpClient) {
    this.displayVideo = false;
    this.displayVideoArray = [];
  }

  onSelectedTitle(title:any){
    this.title = title
  }
  onSelectedDesc(desc:any){
    this.desc = desc
  }
  onSelectedCatagory(category:any){
    this.category = category
  }
  onSelectedAuthor(author:any){
    this.author = author
  }

  onSelectThumbnail(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log('files:', file);
      this.thumbnail = file;
    }}
    onSelectSubtitle(event: any) {
      if (event.target.files.length > 0) {
        const file = event.target.files[0];
        console.log('files:', file);
        this.subtitle = file;
      }}

  onSelectVideo(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log('files:', file);
      this.videos = file;
    }}

  uploadVideo() {
    // construct fomdata
    const formdata = new FormData();
   { formdata.set("title", this.title),
    formdata.set("desc", this.desc),
    formdata.set("category", this.category),
    formdata.set("author", this.author),
    // formdata.append('video', this.thumbnail),
    // formdata.append('video', this.subtitle),
    formdata.append('video', this.videos)}
    console.log('formdata in uploadVideo', this.videos);
    this.Videoupload.uploadVideo(formdata).subscribe((res) => {
      alert("Video uploaded successfully")
      console.log('res in uploadVideo',res.filename);
      this.singleInput.nativeElement.value = '';
      this.displayVideo = true;
      this.displayVideoArray.push(res.filename);
    });
  }

  ngOnInit(): void {}
}
