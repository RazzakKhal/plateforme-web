import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getUsers(){
    return of(['razzak', 'sofiane'])
  }
}
