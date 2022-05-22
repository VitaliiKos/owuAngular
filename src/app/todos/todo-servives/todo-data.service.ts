import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {ITodo} from "../../interfaces";

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  private _url = 'https://jsonplaceholder.typicode.com/todos'

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<ITodo[]> {
    return this.httpClient.get<ITodo[]>(this._url);
  }
}
