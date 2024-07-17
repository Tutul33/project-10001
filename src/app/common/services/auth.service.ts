import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  setLoginData(): any {
    try {
      localStorage.setItem("isLoogedIn", "true");
    } catch (error) {
      return error;
    }
  }

  getLoginData(): any {
    try {
      const isLoogedInData = localStorage.getItem("isLoogedIn");
      return isLoogedInData == 'true' ? true : false;
    } catch (error) {
      return error;
    }
  }
}
