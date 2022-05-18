import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
  },
  {
    path: 'posts',
    loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule),
  },
  {
    path: 'comments',
    loadChildren: () => import('./comments/comments.module').then(m => m.CommentsModule),
  },
  {
    path: 'albums',
    loadChildren: () => import('./albums/albums.module').then(m => m.AlbumsModule),
  },
  {
    path: 'photos',
    loadChildren: () => import('./photos/photos.module').then(m => m.PhotosModule),
  },
  {
    path: 'todos',
    loadChildren: () => import('./todos/todos.module').then(m => m.TodosModule),
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
