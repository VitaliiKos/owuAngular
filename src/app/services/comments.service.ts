import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {CommentInterface} from "../interfaces/comment.interface";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private url = 'https://jsonplaceholder.typicode.com/comments'

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<CommentInterface[]> {
    return this.http.get<CommentInterface[]>(this.url)
  }

}
