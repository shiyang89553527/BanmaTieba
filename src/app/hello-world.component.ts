import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'hello-world',
  templateUrl: './hello-world.component.html'
})
export class HelloWorldComponent {
  title = 'hello world';
  message = '你好毒你好毒你好嘟嘟嘟嘟嘟嘟';
  constructor(private router: Router) {}

  navigateToLogin() {
    this.router.navigate(['/login']).then(success => {
      if (success) {
        console.log('登陆页面跳转成功');
      } else {
        console.log('登陆页面跳转失败');
      }
    }).catch(err => {
      console.error('发生了一个错误:', err);
    });
  }
  showElement = false;
  thisPageToLogin() {
    this.showElement = !this.showElement;
  }
}
