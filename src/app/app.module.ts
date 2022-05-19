import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {UsersComponent} from './components/users/users.component';
import {UserComponent} from './components/user/user.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {HomeComponent} from './components/home/home.component';
import {PostsComponent} from './components/posts/posts.component';
import {PostComponent} from './components/post/post.component';
import {PostDetailComponent} from './components/post-detail/post-detail.component';
import {CommentsComponent} from './components/comments/comments.component';
import {CommentComponent} from './components/comment/comment.component';
import {CommentDetailComponent} from './components/comment-detail/comment-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserDetailsComponent,
    HomeComponent,
    PostsComponent,
    PostComponent,
    PostDetailComponent,
    CommentsComponent,
    CommentComponent,
    CommentDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'home-page', pathMatch: 'full'},
      {path: "home-page", component: HomeComponent},

      {
        path: "users-page",
        component: UsersComponent,
        children: [
          {path: "user-details/:id", component: UserDetailsComponent}
        ]
      },

      {
        path: "posts-page",
        component: PostsComponent,
        children: [
          {path: "post-details/:id", component: PostDetailComponent}
        ]
      },

      {
        path: "comments-page",
        component: CommentsComponent,
        children: [
          {path: "comment-details/:id", component: CommentDetailComponent}
        ]
      },

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
