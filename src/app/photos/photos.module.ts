import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {PhotosRoutingModule} from './photos-routing.module';
import {PhotosComponent} from './photos-components/photos/photos.component';
import {PhotoComponent} from './photos-components/photo/photo.component';
import {PhotoService} from "./photos-services/photo.service";


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
    PhotoService
  ]
})
export class PhotosModule {
}
