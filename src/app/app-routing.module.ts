import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeDashboardComponent } from './components/home-dashboard/home-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { AdminLoginComponent } from './components/login/admin-login/admin-login.component';
import { LoginComponent } from './components/login/login.component';
import { SuperadminLoginComponent } from './components/login/superadmin-login/superadmin-login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RatingComponent } from './components/rating/rating.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SignupComponent } from './components/signup/signup.component';
import { SinglevideoComponent } from './components/singlevideo/singlevideo.component';
import { UpdateRoleComponent } from './components/update-role/update-role.component';
import { UploadvideoComponent } from './components/uploadvideo/uploadvideo.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'adminlogin',component:AdminLoginComponent},
  {path:'superadminlogin',component:SuperadminLoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'',component:HomeComponent},
  { path: 'dashboard', redirectTo: 'dashboard/homeDashboard', pathMatch:'full' },
  {path:'dashboard',component:DashboardComponent, canActivate:[AuthGuard] ,

  children:[
    {path:'homeDashboard',component:HomeDashboardComponent},
    {path:'singlevideo',component:SinglevideoComponent},
    {path:'uploadvideo',component:UploadvideoComponent},
    {path:'rating',component:RatingComponent},
    {path:'navbar',component:NavbarComponent},
    {path:'settings',component:SettingsComponent},
    {path:'updaterole',component:UpdateRoleComponent}
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
