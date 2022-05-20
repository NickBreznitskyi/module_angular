import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

import {ITodo} from "../interfaces";
import {TodoService} from "../services";

@Injectable({
  providedIn: 'root'
})
export class TodosResolver implements Resolve<ITodo[]> {

  constructor(private todoService: TodoService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ITodo[]> | Promise<ITodo[]> | ITodo[] {
    return this.todoService.getAll();
  }
}
