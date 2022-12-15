import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(private dialogePopUp:MatDialog) { }
  // login popup
  loginOpen() {
    this.dialogePopUp.open(LoginComponent)}
  ngOnInit(): void {
  }

}
