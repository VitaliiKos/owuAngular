import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IAlbum} from "../../interfaces";

@Injectable({
  providedIn: 'root'
})
export class AlbumDataService {

  private _url = 'https://jsonplaceholder.typicode.com/albums'

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IAlbum[]> {
    return this.httpClient.get<IAlbum[]>(this._url);
  }
}
