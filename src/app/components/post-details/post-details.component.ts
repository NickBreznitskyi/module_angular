import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IPost} from "../../interfaces";
import {PostService} from "../../services";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  postDetails: IPost

  constructor(private postService: PostService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      const {data} = history.state;
      this._getData(data, id);
    })
  }

  private _getData(data: IPost | undefined, id: string): void {
    if (data) {
      this.postDetails = data
    } else {
      this.postService.getById(id).subscribe(value => this.postDetails = value);
    }
  }

}
