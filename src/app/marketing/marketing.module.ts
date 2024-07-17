import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    PostsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MarketingModule { }
