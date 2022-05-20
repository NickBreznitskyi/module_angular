import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {CommentsRoutingModule} from './comments-routing.module';
import {CommentsComponent} from "./components/comments/comments.component";
import {CommentComponent} from "./components/comment/comment.component";
import {CommentDetailsComponent} from "./components/comment-details/comment-details.component";
import {CommentService} from "./services";
import {CommentsResolver} from "./resolvers";
import {CommentsGuard} from "./guards";


@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent,
    CommentDetailsComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CommentsRoutingModule
  ],
  providers: [
    CommentService,
    CommentsResolver,
    CommentsGuard
  ]
})
export class CommentsModule {
}
