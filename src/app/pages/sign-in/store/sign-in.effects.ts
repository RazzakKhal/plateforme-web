import { inject, Injectable } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as SignInActions from './sign-in.actions';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { LocalStorageService } from '../../../shared/services/local-storage.service';
import { SignInResponse } from '../../../shared/interfaces/signInResponse.interface';
import { getMeAction } from '../../../store/users/actions/get-me.action';

@Injectable({
  providedIn: 'root',
})
export class SignInEffect {
  constructor(
    private authService: AuthService,
    private localStorageService: LocalStorageService
  ) {}

  private actions$ = inject(Actions);

  signIn = createEffect(() =>
    this.actions$.pipe(
      ofType(SignInActions.signIn),
      mergeMap((value) =>
        this.authService.signIn(value.loginForm).pipe(
          map((response: SignInResponse) =>
            SignInActions.signInSuccess({ signInResponse: response })
          ),
          catchError((err) =>
            of(
              SignInActions.signInError({
                error: {
                  message: err.message,
                  status: err.status,
                },
              })
            )
          )
        )
      )
    )
  );

  signInSuccess = createEffect(() =>
    this.actions$.pipe(
      ofType(SignInActions.signInSuccess),
      tap(({ signInResponse }) =>
        this.localStorageService.saveToken(signInResponse.token)
      ),
      map(() => getMeAction())
    )
  );
}
