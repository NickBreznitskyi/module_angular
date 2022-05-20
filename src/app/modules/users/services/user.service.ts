import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {environment} from "../../../../environments/environment";
import {IUser, IUserDetails} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = environment.baseUrl + '/users';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.url);
  }

  getById(id: string): Observable<IUserDetails> {
    return this.http.get<IUserDetails>(this.url + '/' + id);
  }
}
