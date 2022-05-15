import {Injectable} from '@angular/core';

import {IComment, IPost, IUserDetails} from "../interfaces";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class UrlParseOrDdosService {

  data: IUserDetails | IPost | IComment;

  constructor(private userService: UserService) {
  }

  getData(data: IUserDetails | IPost | IComment | undefined, id: string): IUserDetails | IPost | IComment {
    if (data) {
      return data;
    } else {
      this.userService.getById(id).subscribe(value => this.data = value);
      return this.data;
    }
  }
}
