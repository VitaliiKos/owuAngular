import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {IUserDetails} from "../../interfaces/userDetail.interface";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetailObj: IUserDetails

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
        let {state: {data}} = history;
        this.userDetailObj = data as IUserDetails;
      }
    )
  }

}
