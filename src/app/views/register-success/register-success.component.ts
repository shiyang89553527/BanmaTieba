import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {AuthService} from "../../service/auth.service";
import {FootComponent} from "../../component/foot/foot.component";
import {SignedComponent} from "../../component/signed/signed.component";
import {MyModuleModule} from "../../module/my-module.module";
import {LogoComponent} from "../../component/logo/logo.component";

@Component({
  selector: 'app-register-success',
  standalone: true,
  imports: [
    FootComponent,
    SignedComponent,
    RouterLink,
    MyModuleModule,
    LogoComponent
  ],
  templateUrl: './register-success.component.html',
  styleUrls: ['../home/home.component.css']
})
export class RegisterSuccessComponent implements OnInit, OnDestroy{
  username: string | null = this.authService.getUsername();
  countdown: number = 3;
  private intervalId: any;

  constructor(private router: Router, private authService: AuthService) {
    // 启动倒计时
    this.startCountdown();
  }

  ngOnInit(): void {
    this.startCountdown();
  }

  // 启动倒计时
  startCountdown(): void {
    this.intervalId = setInterval(() => {
      this.countdown--;

      if (this.countdown <= 0) {
        clearInterval(this.intervalId);

        // 在3秒后跳转到主页
        this.router.navigate(['/']);
      }
    }, 1000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
