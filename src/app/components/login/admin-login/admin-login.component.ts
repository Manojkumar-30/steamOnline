import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  loginData ={
    email: '',
    password:'',
  }

  constructor(private _auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  // Admin logs in
  loginAdmin() {
    this._auth.loginAdmin(this.loginData).subscribe(
      (res) => {
        alert('login successfull');
        localStorage.setItem('token', res.token);
        this.router.navigate(['/dashboard']);
      },
      (err) => {
        alert(`Invalid admin credentials, enter valid admin credential`);
        console.log(`Error occured`, err);
      }
    );
  }
}
