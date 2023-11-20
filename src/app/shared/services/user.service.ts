import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URL_LINK = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  // TODO: apply username on the BE call
  findUserByUsername(username: string):Observable<User[]> {
    return this.http.get<User[]>(this.URL_LINK);
  }
}
