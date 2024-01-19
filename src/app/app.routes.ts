import {RouterModule, Routes} from '@angular/router';
import {HelloPageComponent} from "./hello-page/hello-page.component";
import {NgModule} from "@angular/core";
import {HelloWorldComponent} from "./hello-world.component";
import {LoginComponent} from "./login/login.component";
import {LoginSuccessComponent} from "./login-success/login-success.component";

export const routes: Routes = [
  {path: '',component: HelloWorldComponent},
  {path: 'hello',component: HelloPageComponent},
  {path: 'login',component: LoginComponent},
  {path: 'login-success/:username', component: LoginSuccessComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
