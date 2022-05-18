import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {AlbumsRoutingModule} from './albums-routing.module';
import {AlbumService} from "./albums-services/album.service";
import {AlbumsComponent} from './albums-components/albums/albums.component';
import {AlbumComponent} from './albums-components/album/album.component';


@NgModule({
  declarations: [
    AlbumsComponent,
    AlbumComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AlbumsRoutingModule
  ],
  providers: [
    AlbumService
  ]
})
export class AlbumsModule {
}
