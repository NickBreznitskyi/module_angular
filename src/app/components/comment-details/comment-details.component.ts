import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {CommentService, UrlParseOrDdosService} from "../../services";
import {IComment} from "../../interfaces";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  commentDetails: IComment;

  constructor(private activatedRoute: ActivatedRoute, private urlParseOrDdosService: UrlParseOrDdosService, private commentService: CommentService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      const {data} = history.state;
      this._getData(data, id);
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
