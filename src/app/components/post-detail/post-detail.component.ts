import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {IPost} from "../../interfaces";
import {PostService} from "../../services";


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  postDetailObj: IPost

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private postService: PostService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
        const state = this.router.getCurrentNavigation()?.extras?.state?.['post'] as IPost;
        if (state) {
          this.postDetailObj = state
        } else {
          this.postService.geByID(id).subscribe(value => this.postDetailObj = value)
        }
      }
    )

  }
}
