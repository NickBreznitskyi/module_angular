import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {environment} from "../../../environments/environment";
import {IComment} from "../../interfaces";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private url: string = environment.baseUrl + '/comments'

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<IComment[]> {
    return this.http.get<IComment[]>(this.url);
  }

  getById(id: string): Observable<IComment> {
    return this.http.get<IComment>(this.url + '/' + id);
  }
}
