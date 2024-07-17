import { Component, OnInit } from '@angular/core';
import { AuthService } from './common/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'project-10001';
  constructor(private authSvc:AuthService){
    
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  isAuthenticated(){
    try {
      return this.authSvc.getLoginData();
    } catch (error) {
      return error;
    }
  }
}
