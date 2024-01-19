import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MyModuleModule} from "./my-module/my-module.module";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyModuleModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myAngular01';
}
