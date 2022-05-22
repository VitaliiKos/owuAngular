import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule, Routes} from "@angular/router";

import {HomeComponent} from "./app-components/home/home.component";


let routes:Routes = [
  {path:'', component:HomeComponent},
  {path:'users', loadChildren:() => import('./users/users.module').then(m => m.UsersModule)},
  {path:'posts', loadChildren:() => import('./posts/posts.module').then(m => m.PostsModule)},
  {path:'comments', loadChildren:() => import('./comments/comments.module').then(m => m.CommentsModule)},
  {path:'albums', loadChildren:() => import('./albums/albums.module').then(m => m.AlbumsModule)},
  {path:'todos', loadChildren:() => import('./todos/todos.module').then(m => m.TodosModule)},
  {path:'photos', loadChildren:() => import('./photos/photos.module').then(m => m.PhotosModule)}
]

@NgModule({
  imports:[
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule {

}
