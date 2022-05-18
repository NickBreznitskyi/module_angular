import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {IPost} from "../../../interfaces";
import {PostService} from "../../posts-services/post.service";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  postDetails: IPost

  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit()
    :
    void {
    this.activatedRoute.params.subscribe(({id}) => {
      const state = this.router.getCurrentNavigation()?.extras?.state?.['post'] as IPost;
      this._getData(state, id);
    })
  }

  private _getData(data: IPost | undefined, id: string):
    void {
    if (data) {
      this.postDetails = data
    } else {
      this.postService.getById(id).subscribe(value => this.postDetails = value);
    }
  }

}
