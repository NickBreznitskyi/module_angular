import {Component, OnInit} from '@angular/core';

import {AlbumService} from "../../albums-services/album.service";
import {IAlbum} from "../../../interfaces";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums: IAlbum[];

  constructor(private albumService: AlbumService) {
  }

  ngOnInit(): void {
    this.albumService.getAll().subscribe(value => this.albums = value);
  }

}
