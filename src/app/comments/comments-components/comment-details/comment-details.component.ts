import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {UrlParseOrDdosService} from "../../../app-services";
import {CommentService} from "../../comments-services/comment.service";
import {IComment} from "../../../interfaces";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  commentDetails: IComment;

  constructor(
    private activatedRoute: ActivatedRoute,
    private urlParseOrDdosService: UrlParseOrDdosService,
    private commentService: CommentService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      const state = this.router.getCurrentNavigation()?.extras?.state?.['comment'] as IComment;
      this._getData(state, id);
    })
  }

  private _getData(data: IComment | undefined, id: string): void {
    if (data) {
      this.commentDetails = data
    } else {
      this.commentService.getById(id).subscribe(value => this.commentDetails = value);
    }
  }

}
