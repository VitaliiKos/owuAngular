import {Component, OnInit} from '@angular/core';

import {IComment} from "../../interfaces";
import {CommentService} from "../../services";


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: IComment []

  constructor(private commentDataService: CommentService) {
  }

  ngOnInit(): void {
    this.commentDataService.getAll().subscribe(value => this.comments = value);
  }

}
