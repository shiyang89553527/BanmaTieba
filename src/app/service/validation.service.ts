export class ValidationService {
  private usernamePattern = /^[A-Za-z0-9]{5,16}$/;
  private passwordPattern = /^[A-Za-z0-9]{5,16}$/;

  validateUsername(username: string): boolean {
    return this.usernamePattern.test(username);
  }

  validatePassword(password: string): boolean {
    return this.passwordPattern.test(password);
  }

  validatePasswordSame(password1: string,password2: string): boolean {
    return password1 === password2;
  }
}
