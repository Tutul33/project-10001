import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {

  private breadcrumbsSubject = new BehaviorSubject<any[]>([]);
  breadcrumbs$ = this.breadcrumbsSubject.asObservable();

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const breadcrumbs = this.getBreadcrumbs(this.activatedRoute.root);
      this.breadcrumbsSubject.next(breadcrumbs);
    });
  }

  private getBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: any[] = []): any[] {
    const routeData = route.routeConfig ? route.routeConfig.data : null;
    const label = routeData && routeData['breadcrumb'] ? routeData['breadcrumb'] : '';
    const path = route.routeConfig ? route.routeConfig.path : '';

    const nextUrl = `${url}${path}/`;

    const breadcrumb = {
      label: label,
      url: nextUrl
    };

    const newBreadcrumbs = breadcrumb.label ? [...breadcrumbs, breadcrumb] : [...breadcrumbs];

    if (route.firstChild) {
      return this.getBreadcrumbs(route.firstChild, nextUrl, newBreadcrumbs);
    }

    return newBreadcrumbs;
}
}
