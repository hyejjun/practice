import { singleton } from 'tsyringe';

import { Store, Action } from 'usestore-ts';
import { apiService } from '../services/ApiService';

@singleton()
@Store()
export default class LoginFormStore {
  email = '';

  password = '';

  error = false;

  accessToken = '';

  /*
    이중 부정 !!value 를 하게되면 value의 boolean(논리값) 을 얻을 수 있다.
    value='' 이면 false 뭔가 있으면 true
    https://mong-blog.tistory.com/entry/%EC%9D%B4%EC%A4%91%EB%B6%80%EC%A0%95-%EC%A1%B0%EA%B1%B4%EB%AC%B8-%EB%8C%80%EC%8B%A0-or%EC%97%B0%EC%82%B0%EC%9E%90%EC%99%80-%EC%A1%B0%EA%B1%B4%EB%AC%B8
  */
  get valid() {
    return this.email.includes('@') && !!this.password;
  }

  @Action()
  changeEmail(email: string) {
    this.email = email;
  }

  @Action()
  changePassword(password: string) {
    this.password = password;
  }

  @Action()
  setAccessToken(accessToken: string) {
    this.accessToken = accessToken;
  }

  @Action()
  setError() {
    this.error = true;
  }

  @Action()
  reset() {
    this.email = '';
    this.password = '';
    this.error = false;
    this.accessToken = '';
  }

  async login() {
    try {
      const accessToken = await apiService.login({
        email: this.email,
        password: this.password,
      });

      this.setAccessToken(accessToken);
    } catch (error) {
      this.setError();
    }
  }
}
