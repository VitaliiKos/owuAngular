import {Component, OnInit} from '@angular/core';

import {IAlbum} from "../../../interfaces";
import {AlbumDataService} from "../../albums-services/album-data.service";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  album: IAlbum []

  constructor(private albumsDataService: AlbumDataService) {
  }

  ngOnInit(): void {
    this.albumsDataService.getAll().subscribe(value => this.album = value)
  }

}
