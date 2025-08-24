import { inject, Injectable } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as SignInActions from './sign-in.actions';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { LocalStorageService } from '../../../shared/services/local-storage.service';
import { SignInResponse } from '../models/signInResponse.interface';
import { getMeAction } from '../../../store/users/actions/get-me.action';
import { SignInApiService } from '../services/sign-in-api.service';

@Injectable({
  providedIn: 'root',
})
export class SignInEffect {
  private readonly signInApiService = inject(SignInApiService);
  private readonly localStorageService = inject(LocalStorageService);
  private readonly actions$ = inject(Actions);

  signIn = createEffect(() =>
    this.actions$.pipe(
      ofType(SignInActions.signIn),
      mergeMap((value) =>
        this.signInApiService.signIn(value.loginForm).pipe(
          map((response: SignInResponse) =>
            SignInActions.signInSuccess({ signInResponse: response })
          ),
          catchError((err) => {
            console.log('error ', err);
            return of(
              SignInActions.signInError({
                error: {
                  message: err.error.message,
                  status: err.error.status,
                },
              })
            );
          })
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
