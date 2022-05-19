import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IComment} from "../../interfaces/comment.interface";
import {CommentService} from "../../services/comment.service";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input()
  comment: IComment;

  constructor(private activatedRoute: ActivatedRoute,
              private userService: CommentService) {
  }

  ngOnInit(): void {
  }
}
