import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from './common/services/auth.service';
import { Subscription } from 'rxjs';
import { Route, Router } from '@angular/router';
import { SidenavService } from './common/services/sidenav.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],  
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'project-10001';
  routes: Route[] = [];
  isLoggedIn: boolean = false;
  sideNavOpenClose: boolean = false;
  private authSubscription: Subscription = new Subscription();
  private sideNavSubscription: Subscription = new Subscription();
  constructor(
    private authSvc: AuthService,
    private router: Router,
    private sidenavService: SidenavService
  ) {
    const currentUrl = this.router.url;

    this.authSubscription = this.authSvc.isLoggedIn$.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
      if (currentUrl != '/login' && currentUrl != '/' && !this.isLoggedIn) {
        this.authSvc.setLoginData(this.isLoggedIn);
        this.router.navigate(['/login']);
      }
    });

    this.sideNavSubscription = this.sidenavService.sideNavState$.subscribe(
      (sideNavSate) => {        
          this.sideNavOpenClose = sideNavSate;
      }
    );
  }
  ngOnInit(): void {
    try {
      throw new Error('Method not implemented.');
    } catch (error) {}
  }
  isAuthenticated() {
    try {
      return this.authSvc.getLoginData();
    } catch (error) {
      return error;
    }
  }
  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
    this.sideNavSubscription.unsubscribe();
  }
}
