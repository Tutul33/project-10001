import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
constructor(private auth:AuthService,private router:Router){

}

logOut(){
  try {
    this.auth.setLoginData(false);
    this.router.navigate(['/login/login']);
  } catch (error) {
    
  }
}
}
