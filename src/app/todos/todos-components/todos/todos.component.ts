import {Component, OnInit} from '@angular/core';

import {ITodo} from "../../../interfaces";
import {TodoService} from "../../todos-services/todo.service";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: ITodo[];

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.todoService.getAll().subscribe(value => this.todos = value);
  }

}
