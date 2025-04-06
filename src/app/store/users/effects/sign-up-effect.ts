import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { signUpAction, signUpError, signUpSuccess } from "../actions/sign-up.actions";
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { AuthService } from "../../../shared/services/auth.service";
import { LocalStorageService } from "../../../shared/services/local-storage.service";
import { SignInResponse } from "../../../models/signInResponse.interface";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class SignUpEffect{

    constructor(private authService : AuthService, private localStorageService: LocalStorageService, private router: Router){}
    
    private actions$ = inject(Actions);

    createUser = createEffect(() => this.actions$.pipe(
        ofType(signUpAction),
        mergeMap(
            (value) => this.authService.signUp(value.user).pipe(
                map(
                    (response: SignInResponse) => signUpSuccess({signUpResponse: response})
                ),
                catchError(
                    (err) => of(signUpError({error : err}))
                )
            )
    
        )
    ))

    signUpSuccess = createEffect(
        () => 
            this.actions$.pipe(
                ofType(signUpSuccess),
                tap(({ signUpResponse }) => this.localStorageService.saveToken(signUpResponse.token)),
                tap(() => this.router.navigate(['/student'])),
                catchError(
                    (err) => of(signUpError({error : err}))
                )
            )
            ,
            { dispatch: false }
    )

}