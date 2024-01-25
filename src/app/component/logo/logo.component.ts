import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  standalone:true,
  styleUrls: ['../../views/home/home.component.css']
})
export class LogoComponent {
  constructor(private router: Router) {}
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
