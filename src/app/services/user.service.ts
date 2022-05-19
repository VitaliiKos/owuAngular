import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IUser} from "../interfaces/user.interface";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _url = 'https://jsonplaceholder.typicode.com/users'

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this._url);
  }

  geByID(id: number): Observable<IUser> {
    return this.http.get<IUser>(this._url + '/' + id);
  }
}
