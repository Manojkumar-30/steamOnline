import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { authDataModel } from 'src/app/models/authModel';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  userDatas: authDataModel[] = []; // Get for authmodel schema
  constructor(private _auth:AuthService, private router:Router) { }


  //  refresh the filter
  refresh(){
    window.location.reload()
  }
  ngOnInit(): void {
     // Read learners Details
     this._auth.getUsersDetails().subscribe((data) => {
      this.userDatas = JSON.parse(JSON.stringify(data));
    });
  }

   // Update a learner Details
   updateUser(userData: any) {
    localStorage.setItem('editUserId', userData._id.toString());
    this.router.navigate(['dashboard/updaterole'])
  }

}
