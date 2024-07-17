import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'auth',
    loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path:'marketing',
    loadChildren:()=>import('./marketing/marketing.module').then(m=>m.MarketingModule)
  },
  {
    path:'',
    redirectTo:'/auth',
    pathMatch:'full'
  },
  {
    path:'**',
    redirectTo:'/auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
