import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from '../services/sidenav.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{
  @ViewChild('sidenav') sidenav!: MatSidenav;
   constructor(private sidenavService: SidenavService){

   }
  ngOnInit(): void {    
    this.sidenavService.sidenavToggle$.subscribe(() => {
      this.toggleSidenav();
    });
  }
  sideContainerHide:boolean=true;  
  toggleSidenav() {    
    this.sidenav.toggle();
    if(this.sidenav._animationState=='open' || this.sidenav._animationState=='open-instant'){
      this.sideContainerHide=true;
      this.sidenavService.setSideNavState(true);
    }else{
      this.sideContainerHide=false;
      this.sidenavService.setSideNavState(false);
    }
  }
}
