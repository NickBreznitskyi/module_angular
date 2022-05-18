import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {PostsRoutingModule} from './posts-routing.module';
import {PostsComponent} from "./posts-components/posts/posts.component";
import {PostComponent} from "./posts-components/post/post.component";
import {PostDetailsComponent} from "./posts-components/post-details/post-details.component";
import {PostService} from "./posts-services/post.service";


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
    PostService
  ]
})
export class PostsModule {
}
