import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as ResetPasswordActions from './reset-password.actions';
import { ResetPasswordApiService } from "../services/reset-password-api.service";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { getMeAction } from "../../../store/users/actions/get-me.action";
import { LocalStorageService } from "../../../shared/services/local-storage.service";
import { TokenDto } from "../models/token.dto";

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
            switchMap(
                ({ resetPasswordDto }) => this.apiService.resetPassword(resetPasswordDto).pipe(
                    map((tokenDto : TokenDto) => ResetPasswordActions.resetPasswordSuccess(tokenDto)),
                    catchError((error) => {console.log('lerreur ',error); return of(ResetPasswordActions.resetPasswordError({ error }))})
                )
            )
        )
    )

    resetPasswordSuccess = createEffect(
        () => this.actions$.pipe(
            ofType(ResetPasswordActions.resetPasswordSuccess),
            tap((tokenDto) => this.localStorageService.saveToken(tokenDto.token)),
            map(
                () => getMeAction()
            )
        )
    )
}