import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path:'',
        component:HomeComponent,
        data: { breadcrumb: 'Marketing>Home' }
    },
    {
        path:'home',
        component:HomeComponent,
        data: { breadcrumb: 'Marketing>Home' }
    },
    {
        path:'posts',
        component:PostsComponent,
        data: { breadcrumb: 'Marketing>Posts' }
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketingRoutingModule { }
