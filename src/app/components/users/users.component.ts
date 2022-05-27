import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import {IUser} from "../../interfaces";
import {UserService} from "../../services";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: IUser[];
  @Output()
  userEmit = new EventEmitter<IUser>();

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(res => this.users = res);
  }

  catchEmit(user: IUser): void {
    this.userEmit.emit(user);
  }
}
