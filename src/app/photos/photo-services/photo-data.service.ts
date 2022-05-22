import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IPhoto} from "../../interfaces";

@Injectable({
  providedIn: 'root'
})
export class PhotoDataService {
  private _url = 'https://jsonplaceholder.typicode.com/photos'

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IPhoto[]> {
    return this.httpClient.get<IPhoto[]>(this._url);
  }
}
