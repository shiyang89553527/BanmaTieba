import {RouterModule, Routes} from '@angular/router';
import {ListPageComponent} from "../views/list-page/list-page.component";
import {NgModule} from "@angular/core";
import {HomeComponent} from "../views/home/home.component";
import {LoginComponent} from "../views/login/login.component";
import {RegisterSuccessComponent} from "../views/register-success/register-success.component";
import {UserProfileComponent} from "../views/user-profile/user-profile.component";
import {RegisterComponent} from "../views/register/register.component";

export const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'hello',component: ListPageComponent},
  {path: 'login',component: LoginComponent},
  {path: 'register-success', component: RegisterSuccessComponent },
  {path: 'user-profile', component: UserProfileComponent },
  {path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
