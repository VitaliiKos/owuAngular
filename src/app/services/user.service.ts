import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {IUser} from '../models/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<IUser[]> {
    return this
      .http
      .get<IUser[]>(this.url);
  }

  getByID(id: number): Observable<IUser> {
    return this
      .http
      .get<any>(this.url + '/' + id);
  }

}
