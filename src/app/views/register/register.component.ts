import { Component } from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {ValidationService} from "../../service/validation.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../home/home.component.css']
})
export class RegisterComponent {
  username = '';
  password1 = '';
  password2 = '';
  errorMsg = '';
  gender = '2';
  head = '';
  private validatePassword = false;
  private validateUsername = false;

  constructor(private authService: AuthService, private router: Router) {
  }

  /**
   * 注册
   */
  register() {
    if (this.validateUsername && this.validatePassword) {
      this.authService.register(this.username, this.password1, this.gender, this.head);
      this.validatePassword = false;
      this.validateUsername = false;

      if (this.authService.login(this.username, this.password1)) {
        this.router.navigate(['/register-success']);
      }
    }
  }

  /**
   * 验证用户名
   */
  validationUsername() {
    this.checkInputsAndClearError();
    if (this.username === '') {
      this.errorMsg = '';
      this.validateUsername = false;
      return;
    }
    const validate = this.authService.isValidateUsername(this.username);

    switch (validate) {
      case 1:
        this.errorMsg = '用户名已被占用或不可注册';
        break;
      case 2:
        this.errorMsg = '非法用户名，请重新输入';
        break;
      default:
        this.errorMsg = '';
        this.validateUsername = true;
    }
  }

  /**
   * 验证密码
   */
  validationPassword() {
    if (!this.validatePassword) return;

    let validationService = new ValidationService();

    if (!validationService.validatePassword(this.password1)) {
      this.errorMsg = '密码强度不够或者非法，请重新输入';
      return;
    }

    this.errorMsg = '';
    this.validatePassword = true;
  }

  /**
   * 验证重复密码是否与密码一致
   */
  validationPasswordRepeat() {
    this.checkInputsAndClearError();
    let validationService = new ValidationService();

    if (!validationService.validatePasswordSame(this.password1,this.password2)) {
      this.errorMsg = '密码不一致，请重新输入';
      return;
    }
    this.errorMsg = '';
    this.validatePassword = true;
  }

  /**
   * 清空表单
   */
  clearForm() {
    this.username = '';
    this.password1 = '';
    this.password2 = '';
    this.errorMsg = '';
    this.gender = '2';
  }

  /**
   * 检查表单是否全为空
   */
  checkInputsAndClearError():void {
    if (this.username === '' && this.password1 === '' && this.password2 === '') {
      this.errorMsg = '';
    }
  }
}
