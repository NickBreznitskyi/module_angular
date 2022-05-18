import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {environment} from "../../../environments/environment";
import {IPost} from "../../interfaces";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = environment.baseUrl + '/posts';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.url);
  }

  getById(id: string): Observable<IPost> {
    return this.http.get<IPost>(this.url + '/' + id);
  }
}
