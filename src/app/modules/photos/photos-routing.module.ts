import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PhotosComponent} from "./components/photos/photos.component";
import {PhotosResolver} from "./resolvers";
import {PhotosGuard} from "./guards";

const routes: Routes = [
  {
    path: '',
    component: PhotosComponent,
    resolve: {data: PhotosResolver},
    canDeactivate: [PhotosGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotosRoutingModule {
}
