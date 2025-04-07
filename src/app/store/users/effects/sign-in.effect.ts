import { inject, Injectable } from "@angular/core";
import { AuthService } from "../../../shared/services/auth.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { signInAction, signInError, signInSuccess } from "../actions/sign-in.actions";
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { LocalStorageService } from "../../../shared/services/local-storage.service";
import { SignInResponse } from "../../../shared/interfaces/signInResponse.interface";
import { Router } from "@angular/router";
import { getMe } from "../actions/get-me.action";

@Injectable({
    providedIn: 'root'
})
export class SignInEffect{

    constructor(private authService : AuthService, private localStorageService : LocalStorageService, private router: Router){}
    
    private actions$ = inject(Actions);

    logUser = createEffect(() => this.actions$.pipe(
        ofType(signInAction),
        mergeMap(
            (value) => this.authService.signIn(value.loginForm).pipe(
                map(
                    (response: SignInResponse) => signInSuccess({signInResponse: response})
                ),
                catchError(
                    (err) => of(signInError({error : err}))
                )
            )
    
        )
    ))

    signInSuccess = createEffect(
            () => 
                this.actions$.pipe(
                    ofType(signInSuccess),
                    tap(() => console.log('sign in succes déclenché')),
                    tap(({ signInResponse }) => this.localStorageService.saveToken(signInResponse.token)),
                    map(() => getMe()),
                    catchError(
                        (err) => of(signInError({error : err}))
                    )
                ),
        )

}