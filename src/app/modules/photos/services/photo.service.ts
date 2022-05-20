import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {environment} from "../../../../environments/environment";
import {IPhoto} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private _url = environment.baseUrl + '/photos';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IPhoto[]> {
    return this.httpClient.get<IPhoto[]>(this._url);
  }
}
