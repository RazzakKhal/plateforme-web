import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as ResetPasswordActions from './reset-password.actions';
import { ResetPasswordApiService } from "../services/reset-password-api.service";
import { ResetPasswordDto } from "../models/reset-password.dto";
import { catchError, map, mergeMap, of, switchMap, tap } from "rxjs";
import { Store } from "@ngrx/store";
import { getMeAction } from "../../../store/users/actions/get-me.action";
import { LocalStorageService } from "../../../shared/services/local-storage.service";

@Injectable({
    providedIn: 'root'
})
export class ResetPasswordEffect {

    private readonly actions$ = inject(Actions);
    private readonly apiService = inject(ResetPasswordApiService);
    private readonly localStorageService = inject(LocalStorageService);

    resetPassword = createEffect(
        () => this.actions$.pipe(
            ofType(ResetPasswordActions.resetPassword),
            tap(({ resetPasswordDto }) => this.localStorageService.saveToken(resetPasswordDto.token)),
            switchMap(
                ({ resetPasswordDto }) => this.apiService.resetPassword(resetPasswordDto).pipe(
                    map(({ token }) => ResetPasswordActions.resetPasswordSuccess({ token: token })),
                    catchError((error) => of(ResetPasswordActions.resetPasswordError({ error })))
                )
            )
        )
    )

    resetPasswordSuccess = createEffect(
        () => this.actions$.pipe(
            ofType(ResetPasswordActions.resetPasswordSuccess),
            tap(({ token }) => this.localStorageService.saveToken(token)),
            map(
                () => getMeAction()
            )
        )
    )
}