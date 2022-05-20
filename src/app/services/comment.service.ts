import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IComment} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private url = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<IComment[]> {
    return this.http.get<IComment[]>(this.url);
  }

  getByID(id: number): Observable<IComment> {
    return this.http.get<IComment>(this.url + '/' + id);
  }


}
