import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IComments} from "../models/IComments";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private url = 'https://jsonplaceholder.typicode.com/comments'

  constructor(private http: HttpClient) {
  }

  getComments(): Observable<IComments[]> {
    return this.http.get<any>(this.url)
  }

}
