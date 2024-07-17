import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(this.getInitialLoginState());
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor() {
    this.setupAutoChecker();
  }
  private setupAutoChecker(): void {
    setInterval(() => {
      const isLoggedIn = this.getInitialLoginState();
      this.isLoggedInSubject.next(isLoggedIn);
    }, 5000); // Check every minute (adjust interval as needed)
  }
  private getInitialLoginState(): boolean {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    return isLoggedIn === 'true';
  }

  setLoginData(isLoggedIn: boolean): void {
    localStorage.setItem("isLoggedIn", String(isLoggedIn));
    this.isLoggedInSubject.next(isLoggedIn);
  }

  getLoginData(): boolean {
    return this.isLoggedInSubject.value;
  }
}
