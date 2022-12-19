import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SinglevideoComponent } from './components/singlevideo/singlevideo.component';
import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
import { UploadvideoComponent } from './components/uploadvideo/uploadvideo.component';
import { FormsModule } from "@angular/forms";
import { RatingComponent } from './components/rating/rating.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeDashboardComponent } from './components/home-dashboard/home-dashboard.component';
import { HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { AdminLoginComponent } from './components/login/admin-login/admin-login.component';
import { SuperadminLoginComponent } from './components/login/superadmin-login/superadmin-login.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './auth.guard';
import { VideoService } from './services/video.service';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { UpdateRoleComponent } from './components/update-role/update-role.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    DashboardComponent,
    SinglevideoComponent,
    UploadvideoComponent,
    RatingComponent,
    SettingsComponent,
    NavbarComponent,
    HomeDashboardComponent,
    AdminLoginComponent,
    SuperadminLoginComponent,
    UpdateRoleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatTabsModule
  ],
  providers: [AuthService, AuthGuard, VideoService,
    {provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
