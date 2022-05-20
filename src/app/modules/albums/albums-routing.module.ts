import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AlbumsComponent} from "./components/albums/albums.component";
import {AlbumsResolver} from "./resolvers";
import {AlbumsGuard} from "./guards";

const routes: Routes = [
  {
    path: '',
    component: AlbumsComponent,
    resolve: {data: AlbumsResolver},
    canDeactivate: [AlbumsGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumsRoutingModule {
}
