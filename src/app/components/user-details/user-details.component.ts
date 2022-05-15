import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IUserDetails} from "../../interfaces";
import {UrlParseOrDdosService, UserService} from "../../services";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetails: IUserDetails;

  constructor(private activatedRoute: ActivatedRoute, private urlParseOrDdosService: UrlParseOrDdosService, private userService: UserService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      const {data} = history.state;

      //todo: Вирішив перенести логіку в сервіс, але воно не працює (не перезаписує data в subscribe).
      // Коли зробив методом в середині компоненти все працює.
      // Не знаю в чому причина.
      //this.userDetails = this.urlParseOrDdosService.getData(data, id);

      this._getData(data, id);
    })
  }

  private _getData(data: IUserDetails | undefined, id: string): void {
    if (data) {
      this.userDetails = data
    } else {
      this.userService.getById(id).subscribe(value => this.userDetails = value);
    }
  }
}
