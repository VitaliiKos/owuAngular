import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IComment} from "../../interfaces";
import {CommentService} from "../../services";


@Component({
  selector: 'app-comment-detail',
  templateUrl: './comment-detail.component.html',
  styleUrls: ['./comment-detail.component.css']
})
export class CommentDetailComponent implements OnInit {

  commentDetailObj : IComment

  constructor(private  activatedRoute:ActivatedRoute,
              private commentService: CommentService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.commentService.getByID(id).subscribe(value => this.commentDetailObj = value)

    })
  }
}
