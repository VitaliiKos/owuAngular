import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos-component/todos/todos.component';
import {PhotoDataService} from "../photos/photo-services/photo-data.service";
import {TodoDataService} from "./todo-servives/todo-data.service";
import { TodoComponent } from './todos-component/todo/todo.component';


@NgModule({
  declarations: [
    TodosComponent,
    TodoComponent
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    HttpClientModule
  ],
  providers: [TodoDataService]
})
export class TodosModule { }
