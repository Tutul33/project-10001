import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  private sidenavToggleSource = new Subject<void>();
  sidenavToggle$ = this.sidenavToggleSource.asObservable();

  private sideNavStateInSubject = new BehaviorSubject<boolean>(true);
  sideNavState$ = this.sideNavStateInSubject.asObservable();
  
  toggleSidenav() {
    this.sidenavToggleSource.next();
  }

  setSideNavState(sideNavState: boolean): void {
    this.sideNavStateInSubject.next(sideNavState);
  }
  
  getSideNavState(): boolean {
    return this.sideNavStateInSubject.value;
  }
}
