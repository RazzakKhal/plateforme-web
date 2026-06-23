import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ResetPasswordActions from './reset-password.actions';
import { ResetPasswordApiService } from '../services/reset-password-api.service';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { AuthService } from '../../../shared/services/auth.service';
import {
  getMeError,
  getMeSuccess,
} from '../../../store/users/actions/get-me.action';
import { LocalStorageService } from '../../../shared/services/local-storage.service';
import { TokenDto } from '../models/token.dto';
import { UserInterface } from '../../../shared/interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class ResetPasswordEffect {
  private readonly actions$ = inject(Actions);
  private readonly authService = inject(AuthService);
  private readonly apiService = inject(ResetPasswordApiService);
  private readonly localStorageService = inject(LocalStorageService);
  private readonly router = inject(Router);

  readonly errorMessage =
    'La réinitialisation a échoué. Veuillez réessayer ou contacter le secrétariat';

  resetPassword = createEffect(() =>
    this.actions$.pipe(
      ofType(ResetPasswordActions.resetPassword),
      switchMap(({ resetPasswordDto }) =>
        this.apiService.resetPassword(resetPasswordDto).pipe(
          map((tokenDto: TokenDto) =>
            ResetPasswordActions.resetPasswordSuccess(tokenDto)
          ),
          catchError(() =>
            of(
              ResetPasswordActions.resetPasswordError({
                error: { message: this.errorMessage, status: 500 },
              })
            )
          )
        )
      )
    )
  );

  resetPasswordSuccess = createEffect(() =>
    this.actions$.pipe(
      ofType(ResetPasswordActions.resetPasswordSuccess),
      tap((tokenDto) => this.localStorageService.saveToken(tokenDto.token)),
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
