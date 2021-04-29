import { Injectable } from '@angular/core';
import { users } from '../../Data/Users';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetUsersService {
  constructor() {}

  getUsers(): Observable<any> {
    return of(users);
  }
}
