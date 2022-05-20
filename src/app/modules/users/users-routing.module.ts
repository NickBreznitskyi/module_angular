import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UsersComponent} from "./components/users/users.component";
import {UserDetailsComponent} from "./components/user-details/user-details.component";
import {UsersResolver} from "./resolvers";
import {UsersGuard} from "./guards";

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    resolve: {data: UsersResolver},
    canDeactivate: [UsersGuard],
    canActivateChild: [UsersGuard],
    children: [
      {
        path: ':id',
        component: UserDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
