import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersInMemoryDataService implements InMemoryDbService {

  createDb() {
    const users = [
      {
        id: 1,
        username: 'op',
        password: 'op',
        name: 'test',
        admin: true,
        language: 'en',
      },
      {
        id: 2,
        username: 'dan31',
        password: 'dannyPass',
        name: 'Dan',
        admin: false,
        language: 'ro',
      },
      {
        id: 3,
        username: 'test',
        password: 'test',
        name: 'test',
        admin: false,
        language: 'en',
      },
      {
        id: 4,
        username: 'andra07',
        password: '70ardna',
        name: 'Man Andrrea',
        admin: false,
        language: 'en',
      }      
    ];
    return {users};
  }

//  // Overrides the genId method to ensure that a hero always has an id.
//   // If the heroes array is empty,
//   // the method below returns the initial number (11).
//   // if the heroes array is not empty, the method below returns the highest
//   // hero id + 1.
//   genId(users: User[]): number {
//     return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 11;
//   }

}

