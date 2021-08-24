import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient,
  ) { }

  private usersApiUrl = 'api/users';  // URL to web api

  /** GET users from the server */
  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.usersApiUrl);
  }

}
