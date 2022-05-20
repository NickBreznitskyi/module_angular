import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {PostsComponent} from "./components/posts/posts.component";
import {PostComponent} from "./components/post/post.component";
import {PostDetailsComponent} from "./components/post-details/post-details.component";
import {PostsRoutingModule} from './posts-routing.module';
import {PostService} from "./services";
import {PostsResolver} from "./resolvers";
import {PostsGuard} from "./guards";


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    PostDetailsComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PostsRoutingModule,
  ],
  providers: [
    PostService,
    PostsResolver,
    PostsGuard
  ]
})
export class PostsModule {
}
