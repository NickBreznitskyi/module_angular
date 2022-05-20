import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {IUserDetails} from "../../interfaces";
import {UserService} from "../../services";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetails: IUserDetails;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      const state = this.router.getCurrentNavigation()?.extras?.state?.['user'] as IUserDetails;
      this._getData(state, id);
    })
  }

  private _getData(data: IUserDetails | undefined, id: string): void {
    if (data) {
      this.userDetails = data;
    } else {
      this.userService.getById(id).subscribe(value => this.userDetails = value);
    }
  }
}
