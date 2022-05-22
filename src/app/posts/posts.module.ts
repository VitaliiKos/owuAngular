import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PostsRoutingModule} from './posts-routing.module';
import {PostsComponent} from './posts-component/posts/posts.component';
import {PostDataService} from "./posts-services/post-data.service";
import {PostComponent} from './posts-component/post/post.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule
  ],
  providers: [PostDataService]
})
export class PostsModule {
}
