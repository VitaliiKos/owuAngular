import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {PostInterface} from "../interfaces/post.interface";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
  }

  getALL(): Observable<PostInterface[]> {
    return this.http.get<PostInterface[]>(this.url);
  }

  getByID(id: number): Observable<PostInterface> {
    return this.http.get<PostInterface>(this.url + '/' + id);
  }
}
