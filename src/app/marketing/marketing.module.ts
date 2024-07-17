import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { MarketingRoutingModule } from './marketing-routing.module';



@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    MarketingRoutingModule
  ]
})
export class MarketingModule { }
