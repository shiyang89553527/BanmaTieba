import {Component, ElementRef, Renderer2, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = 'admin';
  password = '1234';
  loginFailed = false;

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/login-success', this.username]);
    } else {
      this.loginFailed = true;
    }
  }

  modoruIndexPage() {
    this.router.navigate(['/']).then(success => {
      if (success) {
        console.log('主页跳转成功');
      } else {
        console.log('主页跳转失败');
      }
    }).catch(err => {
      console.error('发生了一个错误:', err);
    });
  }
}
