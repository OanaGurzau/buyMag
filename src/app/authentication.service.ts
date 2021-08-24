import { Injectable } from '@angular/core';
import { User } from './user';
import { Users } from './users-db';
import { of } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  users: User[] = Users;

  constructor() { }

  login(username: string, password: string): Observable<User>{
    const index = this.users.findIndex((user: User) =>  user.username === username && user.password === password);
    if(index !== -1) {
      return of(this.users[index]);
    }
    throw new Error("Wrong username or pass");  
  }

}
