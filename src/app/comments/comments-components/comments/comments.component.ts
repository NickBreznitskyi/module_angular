import {Component, OnInit} from '@angular/core';

import {IComment} from "../../../interfaces";
import {CommentService} from "../../comments-services/comment.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: IComment[];

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.commentService.getAll().subscribe(res => this.comments = res);
  }

}
