import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {environment} from "../../../../environments/environment";
import {IAlbum} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private _url = environment.baseUrl + '/albums';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IAlbum[]> {
    return this.httpClient.get<IAlbum[]>(this._url);
  }
}
