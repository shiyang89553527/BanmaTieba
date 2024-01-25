import { Component } from '@angular/core';
import {DatePipe} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-foot',
  standalone: true,
    imports: [
        DatePipe
    ],
  templateUrl: './foot.component.html',
  styleUrls: ['../../views/home/home.component.css']
})
export class FootComponent {
  protected currentDate: Date;
  constructor(private router: Router,private datePipe: DatePipe) {
    this.currentDate = new Date();
  }
}
