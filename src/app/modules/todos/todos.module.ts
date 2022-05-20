import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {TodosComponent} from './components/todos/todos.component';
import {TodoComponent} from './components/todo/todo.component';
import {TodosRoutingModule} from './todos-routing.module';
import {TodoService} from "./services";


@NgModule({
  declarations: [
    TodosComponent,
    TodoComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TodosRoutingModule
  ],
  providers: [
    TodoService,
  ],
})
export class TodosModule {
}
