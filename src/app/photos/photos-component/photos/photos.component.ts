import {Component, OnInit} from '@angular/core';

import {IPhoto} from "../../../interfaces";
import {PhotoDataService} from "../../photo-services/photo-data.service";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photos: IPhoto []

  constructor(private photoDataService: PhotoDataService) {
  }

  ngOnInit(): void {
    this.photoDataService.getAll().subscribe(value => this.photos = value)
  }

}
