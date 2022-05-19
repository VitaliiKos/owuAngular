import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {ICommentDetail} from "../../interfaces/commentDetail.interface";

@Component({
  selector: 'app-comment-detail',
  templateUrl: './comment-detail.component.html',
  styleUrls: ['./comment-detail.component.css']
})
export class CommentDetailComponent implements OnInit {

  commentDetailObj : ICommentDetail

  constructor(private  activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
      let{state: {data}} = history;
      this.commentDetailObj = data as ICommentDetail
    })
  }

}
