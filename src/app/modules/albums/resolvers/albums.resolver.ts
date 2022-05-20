import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

import {IAlbum} from "../interfaces";
import {AlbumService} from "../services";

@Injectable({
  providedIn: 'root'
})
export class AlbumsResolver implements Resolve<IAlbum[]> {
  constructor(private albumService: AlbumService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IAlbum[]> | Promise<IAlbum[]> | IAlbum[] {
    return this.albumService.getAll();
  }
}
