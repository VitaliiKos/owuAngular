import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {UserInterface} from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<UserInterface[]> {
    return this
      .http
      .get<UserInterface[]>(this.url);
  }

  getByID(id: number): Observable<UserInterface> {
    return this
      .http
      .get<any>(this.url + '/' + id);
  }

}
