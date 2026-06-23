import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "../../../shared/services/auth.service";
import {
  getMeAction,
  getMeError,
  getMeSuccess,
  updateMe,
  updateMeError,
  updateMeSuccess,
} from "../actions/get-me.action";
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { UserInterface } from "../../../shared/interfaces/user.interface";
import { UserRequestInterface } from "../../../shared/interfaces/user-request.interface";


@Injectable({
    providedIn: 'root'
})
export class MeEffect{
    constructor(private authService : AuthService){}
        
        private actions$ = inject(Actions);

        getMe = createEffect(
            () => this.actions$.pipe(
                ofType(getMeAction),
                mergeMap(
                    () => this.authService.getMe().pipe(
                        map((user : UserInterface) => getMeSuccess({user})),
                        catchError((error) => of(getMeError({ error })))
                    )
                )
            )
        )

        updateMe = createEffect(
            () => this.actions$.pipe(
                ofType(updateMe),
                mergeMap(
                    ({ user }) => this.authService.updateMe(user as UserRequestInterface).pipe(
                        map((response : UserInterface) => updateMeSuccess({user: response})),
                        catchError((error) => of(updateMeError({ error })))
                    )
                )
            )
        )

}
