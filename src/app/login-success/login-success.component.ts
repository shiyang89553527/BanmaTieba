import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login-success',
  standalone: true,
  imports: [],
  templateUrl: './login-success.component.html',
  styleUrl: './login-success.component.css'
})
export class LoginSuccessComponent {
  username: string;

  constructor(private route: ActivatedRoute) {
    this.username = this.route.snapshot.params['username'];
  }
}
