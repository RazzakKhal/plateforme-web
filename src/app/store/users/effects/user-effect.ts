import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { addUser, notif } from '../actions/users.actions';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserEffect {

  constructor() {
   }

   actions$ = inject(Actions)

  notifySuccess = createEffect(() => this.actions$.pipe(
    ofType(addUser),
    map(() => notif())
  ))
}
