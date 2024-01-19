import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HelloWorldComponent} from "../hello-world.component";
import {HelloPageComponent} from "../hello-page/hello-page.component";
import {LoginComponent} from "../login/login.component";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    HelloWorldComponent,
    HelloPageComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HelloWorldComponent,
    HelloPageComponent,
    LoginComponent,
  ]
})
export class MyModuleModule { }
