import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData ={
    email: '',
    password:'',
  }
  constructor(private _auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  // User logs in
  loginUser() {
    this._auth.loginUser(this.loginData).subscribe(
      (res) => {
        alert('login successfull');
        localStorage.setItem('token', res.token);
        this.router.navigate(['/dashboard']);
      },
      (err) => {
        alert(`Invalid credentials, enter valid credential`);
        console.log(`Error occured`, err);
      }
    );
  }
}