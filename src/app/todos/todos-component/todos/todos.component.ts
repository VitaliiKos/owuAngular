import {Component, OnInit} from '@angular/core';

import {ITodo} from "../../../interfaces";
import {TodoDataService} from "../../todo-servives/todo-data.service";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: ITodo []

  constructor(private todoDataService: TodoDataService) {
  }

  ngOnInit(): void {
    this.todoDataService.getAll().subscribe(value => this.todos = value)
  }

}
