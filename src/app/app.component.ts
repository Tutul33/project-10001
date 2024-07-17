import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from './common/services/auth.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnDestroy {
  title = 'project-10001';
  routes: Route[] = [];
  isLoggedIn: boolean = false;
  private authSubscription: Subscription;
  constructor(private authSvc: AuthService,private router: Router, private route: ActivatedRoute) {
    this.authSubscription = this.authSvc.isLoggedIn$.subscribe(isLoggedIn => {
      const segments = this.route.snapshot.url.map(segment => segment.path);
      // this.route.url.subscribe(segments => {
      //   const currentPath = segments.map(segment => segment.path).join('/');
      //   console.log('Current Path:', currentPath);
  
      //   // Parent routes inspection
      //   let parent = this.route.parent;
      //   while (parent) {
      //     console.log('Parent Route:', parent.snapshot.url.map(segment => segment.path).join('/'));
      //     parent = parent.parent;
      //   }
      // });
    
        // if (segments.length) {
        //   this.isLoggedIn=isLoggedIn;
        // }else{
        //   this.isLoggedIn = false;
        //   this.authSvc.setLoginData(false);
        // }
        this.isLoggedIn=isLoggedIn;
    });
  }
  ngOnInit(): void {
    try {
      throw new Error('Method not implemented.');
    } catch (error) {
      
    }
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
  }
}
