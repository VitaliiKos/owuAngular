import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IPostDetail} from "../../interfaces/postDetail.interface";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  postDetailObj: IPostDetail

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
      let {state: {data}} = history;
      this.postDetailObj = data as IPostDetail
    })
  }
}
