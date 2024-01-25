import {Injectable, OnInit} from '@angular/core';
import {ValidationService} from "./validation.service";

interface UserAccount  {
  username: string;
  password: string;
  gender: string;
  head: string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService{
  private readonly userKey = 'auth_user';
  private readonly headKey = 'auth_head';
  private readonly genderKey = 'auth_gender';
  private readonly accountsKey = 'user_accounts';
  private validationService = new ValidationService();
  constructor() {
    this.initAccounts();
    //测试用，方便登陆
    // localStorage.clear();//清理临时数据
    const accountsJson = localStorage.getItem(this.accountsKey);
    console.log(accountsJson)
  }
  private initAccounts(): void {
    if (!localStorage.getItem(this.accountsKey)) {
      const initialAccounts: UserAccount[] = [
        { username: 'admin', password: 'admin12345', gender: '1', head: '6.gif'},
        { username: 'shiyangbo', password: 'syafs521', gender: '2', head: '5.gif' },
        { username: 'banma123', password: 'banma666', gender: '1', head: '7.gif' },
        { username: 'banma456', password: 'banma888', gender: '2', head: '3.gif' }
      ];
      localStorage.setItem(this.accountsKey, JSON.stringify(initialAccounts));
    }
  }
  private getAccounts(): UserAccount[] {
    const accountsJson = localStorage.getItem(this.accountsKey);
    return accountsJson ? JSON.parse(accountsJson) : [];
  }
  login(username: string, password: string): boolean {
    const accounts = this.getAccounts();
    const user = accounts.find(account => account.username === username && account.password === password);
    if (user) {
      localStorage.setItem(this.userKey, username);
      localStorage.setItem(this.headKey, user.head);
      localStorage.setItem(this.genderKey, user.gender);
      return true;
    }
    return false;
  }


  register(username: string, password: string, gender: string, head: string): void {
    const accounts = this.getAccounts();
    accounts.push({ username, password, gender, head});
    localStorage.setItem(this.accountsKey, JSON.stringify(accounts));
  }

  isLoggedIn(): boolean {
    return localStorage.getItem(this.userKey) !== null;
  }

  getUsername(): string | null {
    return localStorage.getItem(this.userKey);
  }

  getHead(): string | null {
    return localStorage.getItem(this.headKey);
  }
  getGender(): string | null {
    return localStorage.getItem(this.genderKey);
  }
  logout(): void {
    localStorage.removeItem(this.userKey);
  }
  /**
   *
   * @param username
   * @param password
   * @return 1： 用户名存在 2： 用户名长度 或 用户名非法字符  3： 密码长度 或 密码强度 0:成功
   */
  isValidateUsername(username: string): number {

    if (!this.validationService.validateUsername(username)) {
      return 2;
    }
    if (this.getAccounts().find(account => account.username === username)) {
      return 1; // 用户名已存在
    }

    return 0;
  }
}
