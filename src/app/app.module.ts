import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: "home-page", component: HomeComponent},
      {path: "users-page",
        component: UsersComponent,
        children:[
          {path: "user-details/:id", component: UserDetailComponent}
        ]
      },
      // {path: "user-details/:id", component: UserDetailComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
