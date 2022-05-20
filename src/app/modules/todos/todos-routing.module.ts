import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TodosComponent} from "./components/todos/todos.component";
import {TodosResolver} from "./resolvers";

const routes: Routes = [
  {
    path: '',
    component: TodosComponent,
    resolve: {data: TodosResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule {
}
