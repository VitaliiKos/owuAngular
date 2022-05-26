import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";

import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";


let routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'users', pathMatch: 'full'},
      {path: 'users', loadChildren: () => import('./modules').then(value => value.UserModule)},
      {path: 'posts', loadChildren: () => import('./modules').then(value => value.PostModule)},
      {path: 'comments', loadChildren: () => import('./modules').then(value => value.CommentModule)},
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
