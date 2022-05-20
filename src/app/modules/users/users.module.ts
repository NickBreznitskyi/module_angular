import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {UsersComponent} from "./components/users/users.component";
import {UserComponent} from "./components/user/user.component";
import {UserDetailsComponent} from "./components/user-details/user-details.component";
import {UserService} from "./services";
import {UsersResolver} from "./resolvers";
import {UsersRoutingModule} from './users-routing.module';
import {UsersGuard} from "./guards";


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserDetailsComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    UsersRoutingModule
  ],
  providers: [
    UserService,
    UsersResolver,
    UsersGuard
  ]
})
export class UsersModule {
}
