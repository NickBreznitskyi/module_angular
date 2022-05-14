import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {environment} from "../../environments/environment";
import {IUser} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = environment.baseUrl + '/users';

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.url);
  }
}
