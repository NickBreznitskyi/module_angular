import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

import {IPhoto} from "../interfaces";
import {PhotoService} from "../services";

@Injectable({
  providedIn: 'root'
})
export class PhotosResolver implements Resolve<IPhoto[]> {

  constructor(private photoService: PhotoService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPhoto[]> | Promise<IPhoto[]> | IPhoto[] {
    return this.photoService.getAll();
  }

}
