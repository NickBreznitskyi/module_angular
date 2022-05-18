import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {TodosRoutingModule} from './todos-routing.module';
import {TodoService} from "./todos-services/todo.service";
import {TodosComponent} from './todos-components/todos/todos.component';
import {TodoComponent} from './todos-components/todo/todo.component';


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
