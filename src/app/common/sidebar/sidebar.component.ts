import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from '../services/sidenav.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{
  menuData: MenuItem[] = [];
  @ViewChild('sidenav') sidenav!: MatSidenav;
   constructor(private sidenavService: SidenavService){

   }
  ngOnInit(): void {   
    this.menuData=menuData; 
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

  //
  showsItem(item:any,parent:string){
     console.log(parent,item);
  }
  }

// Assuming this structure for menu items
export interface MenuItem {
  name: string;
  route?: string; // Optional if it's a link
  icon: string;
  description?: string; // Optional description
  children?: MenuItem[]; // Optional nested menu items
}
// Example menu data
 export const menuData: MenuItem[] = [
  {
    name: 'Dashboard',
    route: '/dashboard',
    icon: 'dashboard',
    children: [
      {
        name: 'Home',
        route: '/dashboard/home',
        icon: 'home'
      }
    ]
  },
  {
    name: 'Marketing',
    icon: 'marketing',
    children: [
      {
        name: 'Home',
        route: '/marketing/home',
        icon: 'home'
      },
      {
        name: 'Posts',
        route: '/marketing/posts',
        icon: 'post'
      }
    ]
  },
  {
    name: 'Inventory',
    icon: 'inventory',
    children: [
      {
        name: 'Purchase Requisition',
        icon: 'purchase_requisition',
        children: [
          {
            name: 'Create PR',
            route: '/inventory/purchase-requisition/create',
            icon: 'create'
          },
          {
            name: 'PR List',
            route: '/inventory/purchase-requisition/list',
            icon: 'list'
          },
          {
            name: 'Reports',
            icon: 'reports',
            children: [
              {
                name: 'Yearly',
                route: '/inventory/purchase-requisition/reports/yearly',
                icon: 'calendar_year'
              },
              {
                name: 'Monthly',
                route: '/inventory/purchase-requisition/reports/monthly',
                icon: 'calendar_month'
              },
              {
                name: 'Daily',
                route: '/inventory/purchase-requisition/reports/daily',
                icon: 'calendar_day'
              }
            ]
          }
        ]
      },
      {
        name: 'Requisition',
        icon: 'requisition',
        children: [
          {
            name: 'Create RQ',
            route: '/inventory/requisition/create',
            icon: 'create'
          },
          {
            name: 'RQ List',
            route: '/inventory/requisition/list',
            icon: 'list'
          },
          {
            name: 'Reports',
            icon: 'reports',
            children: [
              {
                name: 'Yearly',
                route: '/inventory/requisition/reports/yearly',
                icon: 'calendar_year'
              },
              {
                name: 'Monthly',
                route: '/inventory/requisition/reports/monthly',
                icon: 'calendar_month'
              },
              {
                name: 'Daily',
                route: '/inventory/requisition/reports/daily',
                icon: 'calendar_day'
              }
            ]
          }
        ]
      }
    ]
  }
];
