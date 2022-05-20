import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PostsComponent} from "./components/posts/posts.component";
import {PostDetailsComponent} from "./components/post-details/post-details.component";
import {PostsResolver} from "./resolvers";
import {PostsGuard} from "./guards";

const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
    resolve: {data: PostsResolver},
    canDeactivate: [PostsGuard],
    canActivateChild: [PostsGuard],
    children: [
      {
        path: ':id',
        component: PostDetailsComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {
}
