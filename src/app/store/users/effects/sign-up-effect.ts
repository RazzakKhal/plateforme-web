import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { addMe, signUpAction, signUpError } from "../actions/sign-up.actions";
import { catchError, map, mergeMap, of } from "rxjs";
import { AuthService } from "../../../shared/services/auth.service";

@Injectable({
    providedIn: 'root'
})
export class SignUpEffect{

    constructor(private authService : AuthService){}
    
    private actions$ = inject(Actions);

    createUser = createEffect(() => this.actions$.pipe(
        ofType(signUpAction),
        mergeMap(
            (value) => this.authService.signUp(value.user).pipe(
                map(
                    (user) => addMe({me: user})
                ),
                catchError(
                    (err) => of(signUpError({error : err}))
                )
            )
    
        )
    ))

}