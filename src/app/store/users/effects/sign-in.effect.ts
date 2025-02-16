import { inject, Injectable } from "@angular/core";
import { AuthService } from "../../../shared/services/auth.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { signInAction, signInError } from "../actions/sign-in.actions";
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { addMe } from "../actions/sign-up.actions";

@Injectable({
    providedIn: 'root'
})
export class SignInEffect{

    constructor(private authService : AuthService){}
    
    private actions$ = inject(Actions);

    logUser = createEffect(() => this.actions$.pipe(
        ofType(signInAction),
        tap(() => console.log('action dispatch')),
        mergeMap(
            (value) => this.authService.signIn(value.loginForm).pipe(
                map(
                    (user) => addMe({me: user})
                ),
                catchError(
                    (err) => of(signInError({error : err}))
                )
            )
    
        )
    ))

}