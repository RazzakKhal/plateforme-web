import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as SignInActions from './sign-in.actions';
import { catchError, map, mergeMap, of, switchMap, tap } from 'rxjs';
import { LocalStorageService } from '../../../shared/services/local-storage.service';
import { SignInResponse } from '../models/signInResponse.interface';
import {
  getMeError,
  getMeSuccess,
} from '../../../store/users/actions/get-me.action';
import { SignInApiService } from '../services/sign-in-api.service';
import { UserInterface } from '../../../shared/interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class SignInEffect {
  private readonly authService = inject(AuthService);
  private readonly signInApiService = inject(SignInApiService);
  private readonly localStorageService = inject(LocalStorageService);
  private readonly actions$ = inject(Actions);
  private readonly router = inject(Router);

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
      switchMap(() =>
        this.authService.getMe().pipe(
          tap((user: UserInterface) => {
            void (!user.roles?.includes('ROLE_ADMIN')
              ? this.router.navigate(['/student'])
              : this.router.navigate(['/admin']));
          }),
          map((user: UserInterface) => getMeSuccess({ user })),
          catchError((error) => of(getMeError({ error })))
        )
      )
    )
  );
}
