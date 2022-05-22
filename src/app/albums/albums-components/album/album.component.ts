import {Component, Input, OnInit} from '@angular/core';

import {IAlbum} from "../../../interfaces";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  @Input()
  album: IAlbum

  constructor() {
  }

  ngOnInit(): void {
  }

}
