import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {CommentsRoutingModule} from './comment-routing.module';
import {CommentComponent} from './components/comment/comment.component';
import {CommentsComponent} from './components/comments/comments.component';
import {CommentDetailsComponent} from './components/comment-details/comment-details.component';
import {CommentResolver, CommentService} from "./services";


@NgModule({
  declarations: [
    CommentComponent,
    CommentsComponent,
    CommentDetailsComponent
  ],
  imports: [
    CommonModule,
    CommentsRoutingModule,
    HttpClientModule
  ],
  providers: [
    CommentService,
    CommentResolver
  ]
})
export class CommentModule {
}
