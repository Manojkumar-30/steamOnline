import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupData ={
    firstname:'',
    lastname:'',
    email: '',
    password:'',
    checkbox:''
  }
  constructor(private _auth: AuthService, private router: Router ) { }

  ngOnInit(): void {
  }

  //signup function
  signUp() {
    console.log(this.signupData);
    this._auth.userSignUp(this.signupData).subscribe((res) => {
      console.log(res);
      alert('Account Registered Successfully');
      this.router.navigate(['login']);
    }, err=>{
      alert("Email already registered")
      console.log(err);
    });
  }
}
