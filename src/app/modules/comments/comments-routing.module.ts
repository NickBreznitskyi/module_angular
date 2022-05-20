import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CommentsComponent} from "./components/comments/comments.component";
import {CommentDetailsComponent} from "./components/comment-details/comment-details.component";
import {CommentsResolver} from "./resolvers";
import {CommentsGuard} from "./guards";

const routes: Routes = [
  {
    path: '',
    component: CommentsComponent,
    resolve: {data: CommentsResolver},
    canActivateChild: [CommentsGuard],
    canDeactivate: [CommentsGuard],
    children: [
      {
        path: ':id',
        component: CommentDetailsComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsRoutingModule {
}
