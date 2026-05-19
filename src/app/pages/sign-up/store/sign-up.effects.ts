import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { LocalStorageService } from '../../../shared/services/local-storage.service';
import * as SignUpActions from './sign-up.actions';
import { getMeAction } from '../../../store/users/actions/get-me.action';
import { SignUpApiService } from '../services/sign-up-api.service';
import { SignUpResponse } from '../models/sign-up-response.dto';

@Injectable({
  providedIn: 'root',
})
export class SignUpEffect {
  private readonly actions$ = inject(Actions);
  private readonly signUpApiService = inject(SignUpApiService);
  private readonly localStorageService = inject(LocalStorageService);

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
      map(() => getMeAction())
    )
  );
}
