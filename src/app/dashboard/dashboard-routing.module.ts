import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
const routes: Routes = [    
    {
        path: '',
        component: HomeComponent,
        data: { breadcrumb: 'Dashboard>Home' }
    },
    {
        path: 'home',
        component: HomeComponent,
        data: { breadcrumb: 'Dashboard>Home' }
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {
}