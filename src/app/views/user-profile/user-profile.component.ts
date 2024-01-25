import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['../home/home.component.css']
})
export class UserProfileComponent {
  username: string | null = this.authService.getUsername();

  constructor(private route: ActivatedRoute,private authService : AuthService, private router: Router) {
  }

  logout() {
    this.authService.logout();
    // 可以进行路由跳转或其他操作
    this.router.navigate(['/login']);
  }
}
