import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {IUserDetails} from "../../../interfaces";
import {UrlParseOrDdosService} from "../../../app-services";
import {UserService} from "../../users-services/user.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetails: IUserDetails;

  constructor(
    private activatedRoute: ActivatedRoute,
    private urlParseOrDdosService: UrlParseOrDdosService,
    private userService: UserService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      const state = this.router.getCurrentNavigation()?.extras?.state?.['user'] as IUserDetails;

      //todo: Вирішив перенести логіку в сервіс, але воно не працює (не перезаписує data в subscribe).
      // Коли зробив методом в середині компоненти все працює.
      // Не знаю в чому причина.
      //this.userDetails = this.urlParseOrDdosService.getData(data, id);

      this._getData(state, id);
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
