import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {environment} from "../../environments/environment";
import {IPost} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = environment.baseUrl + '/posts';

  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.url);
  }
}
