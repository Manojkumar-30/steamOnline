import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  constructor(private http: HttpClient) {}

  uploadVideo(body: any) {
    console.log('inside videoservices file of videoUpload', body);
    return this.http.post<any>('http://localhost:3000/videoUpload', body);
  }

  // Read video data
  getVideosDetials() {
    return this.http.get<any>(`http://localhost:3000/videoDetails`);
  }


  // get learner details to update by ID 
  getVideo(id: any) {
    return this.http.get("http://localhost:3000/getSingleVideo" + id);
  }
}