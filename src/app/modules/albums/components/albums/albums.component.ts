import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IAlbum} from "../../interfaces";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums: IAlbum[];

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({data}) => this.albums = data);
  }

}
