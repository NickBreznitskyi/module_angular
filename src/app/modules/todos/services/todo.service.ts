import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {environment} from "../../../../environments/environment";
import {ITodo} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private _url = environment.baseUrl + '/todos'

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<ITodo[]> {
    return this.httpClient.get<ITodo[]>(this._url);
  }
}
