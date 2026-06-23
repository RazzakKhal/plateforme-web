import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, switchMap, tap } from 'rxjs';
import { AuthService } from '../../../shared/services/auth.service';
import { LocalStorageService } from '../../../shared/services/local-storage.service';
import * as SignUpActions from './sign-up.actions';
import {
  getMeError,
  getMeSuccess,
} from '../../../store/users/actions/get-me.action';
import { SignUpApiService } from '../services/sign-up-api.service';
import { SignUpResponse } from '../models/sign-up-response.dto';
import { UserInterface } from '../../../shared/interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class SignUpEffect {
  private readonly actions$ = inject(Actions);
  private readonly authService = inject(AuthService);
  private readonly signUpApiService = inject(SignUpApiService);
  private readonly localStorageService = inject(LocalStorageService);
  private readonly router = inject(Router);

  signUp = createEffect(() =>
    this.actions$.pipe(
      ofType(SignUpActions.signUp),
      mergeMap(({ user }) =>
        this.signUpApiService.signUp(user).pipe(
          map((response: SignUpResponse) =>
            SignUpActions.signUpSuccess({ signUpResponse: response })
          ),
          catchError((err) =>
            of(
              SignUpActions.signUpError({
                error: { message: err.error.message, status: err.error.status },
              })
            )
          )
        )
      )
    )
  );

  signUpSuccess = createEffect(() =>
    this.actions$.pipe(
      ofType(SignUpActions.signUpSuccess),
      tap(({ signUpResponse }) =>
        this.localStorageService.saveToken(signUpResponse.token)
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
