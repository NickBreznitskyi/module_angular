import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {AlbumsRoutingModule} from './albums-routing.module';
import {AlbumsComponent} from './components/albums/albums.component';
import {AlbumComponent} from './components/album/album.component';
import {AlbumsGuard} from "./guards";
import {AlbumsResolver} from "./resolvers";
import {AlbumService} from "./services";


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
    AlbumService,
    AlbumsResolver,
    AlbumsGuard
  ]
})
export class AlbumsModule {
}
