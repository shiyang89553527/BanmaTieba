import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'hello-world',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  currentDate: Date;
  constructor(private router: Router,private datePipe: DatePipe) {
    this.currentDate = new Date();
  }
  showElement = false;
}
