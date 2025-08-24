import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ForgotPasswordApiService } from '../services/forgot-password-api.service';
import * as ForgotPasswordActions from './forgot-password.actions';
import { catchError, map, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ForgotPasswordEffect {
  private readonly actions$ = inject(Actions);
  private readonly apiService = inject(ForgotPasswordApiService);

  readonly errorMessage =
    "L'envoi du mail a échoué. Veuillez réessayer ou contacter le secrétariat";

  forgotPassword = createEffect(() =>
    this.actions$.pipe(
      ofType(ForgotPasswordActions.forgotPassword),
      switchMap(({ mail }) =>
        this.apiService.sendMail(mail).pipe(
          map(() => ForgotPasswordActions.forgotPasswordSuccess()),
          catchError((err) =>
            of(
              ForgotPasswordActions.forgotPasswordError({
                error: {
                  message:
                    err.error.status === 404
                      ? err.error.message
                      : this.errorMessage,
                  status: err.error.status,
                },
              })
            )
          )
        )
      )
    )
  );
}
