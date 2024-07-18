import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { SidenavService } from '../services/sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
constructor(private auth:AuthService,private router:Router,private sidenavService: SidenavService){

}

logOut(){
  try {
    this.auth.setLoginData(false);
    this.router.navigate(['/login']);
  } catch (error) {
    
  }
}

onAppIconClick() {
  this.sidenavService.toggleSidenav();
}

}
