import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-superadmin-login',
  templateUrl: './superadmin-login.component.html',
  styleUrls: ['./superadmin-login.component.css']
})
export class SuperadminLoginComponent implements OnInit {
  loginData ={
    email: '',
    password:'',
  }

  constructor(private _auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  // Super Admin logs in
  loginSuperAdmin() {
    this._auth.loginSuperAdmin(this.loginData).subscribe(
      (res) => {
        alert('login successfull');
        localStorage.setItem('token', res.token);
        this.router.navigate(['/dashboard']);
      },
      (err) => {
        alert(`Invalid super admin credentials, enter valid super admin credential`);
        console.log(`Error occured`, err);
      }
    );
  }
}
