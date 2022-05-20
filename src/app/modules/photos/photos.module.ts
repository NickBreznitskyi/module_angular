import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {PhotosComponent} from './components/photos/photos.component';
import {PhotoComponent} from './components/photo/photo.component';
import {PhotosRoutingModule} from './photos-routing.module';
import {PhotoService} from "./services";
import {PhotosResolver} from "./resolvers";
import {PhotosGuard} from "./guards";


@NgModule({
  declarations: [
    PhotosComponent,
    PhotoComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PhotosRoutingModule
  ],
  providers: [
    PhotoService,
    PhotosResolver,
    PhotosGuard
  ]
})
export class PhotosModule {
}
