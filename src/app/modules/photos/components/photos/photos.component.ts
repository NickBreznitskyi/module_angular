import {Component, OnInit} from '@angular/core';

import {IPhoto} from "../../interfaces";
import {PhotoService} from "../../services";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photos: IPhoto[];

  constructor(private photoService: PhotoService) {
  }

  ngOnInit(): void {
    this.photoService.getAll().subscribe(value => this.photos = value);
  }

}
