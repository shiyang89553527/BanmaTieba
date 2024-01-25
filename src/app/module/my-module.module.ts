import { NgModule } from '@angular/core';
import {CommonModule, DatePipe, NgOptimizedImage} from '@angular/common';
import {HomeComponent} from "../views/home/home.component";
import {ListPageComponent} from "../views/list-page/list-page.component";
import {LoginComponent} from "../views/login/login.component";
import {FormsModule} from "@angular/forms";
import {UserProfileComponent} from "../views/user-profile/user-profile.component";
import {RegisterComponent} from "../views/register/register.component";
import {RouterLink} from "@angular/router";
import {FootComponent} from "../component/foot/foot.component";
import {SignedComponent} from "../component/signed/signed.component";
import {LogoComponent} from "../component/logo/logo.component";


@NgModule({
  declarations: [
    HomeComponent,
    ListPageComponent,
    LoginComponent,
    UserProfileComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgOptimizedImage,
    RouterLink,
    FootComponent,
    SignedComponent,
    LogoComponent,
  ],
  exports: [
    HomeComponent,
    ListPageComponent,
    LoginComponent,
  ],
  providers: [DatePipe],
})
export class MyModuleModule { }
