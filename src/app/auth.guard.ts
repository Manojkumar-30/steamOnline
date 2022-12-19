import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _authService: AuthService, private router:Router  ) {}

  canActivate(): boolean {
    if (this._authService.userLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['login'])
      return false;
    }
  }



}
