import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {AuthService} from "../../service/auth.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-signed',
  standalone: true,
  imports: [
    NgIf,
    RouterLink
  ],
  templateUrl: './signed.component.html',
  styleUrls: ['../../views/home/home.component.css']
})
export class SignedComponent {
  protected readonly AuthService = AuthService;
  username: string | null = this.authService.getUsername();
  head = this.authService.getHead();
  isLoginedIn = this.authService.isLoggedIn();

  constructor(private router: Router, private authService: AuthService) {
  }
  /**
   * 个人主页
   */
  navigateToUserProfile() {
    // 在这里执行导航到个人主页的操作，例如导航到 '/user-profile' 路由
    this.router.navigate(['/user-profile']).then(success => {
      if (success) {
        console.log('登陆页面跳转成功1');
      } else {
        console.log('登陆页面跳转失败');
      }
    });
  }
}
