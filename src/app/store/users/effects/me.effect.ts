import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "../../../shared/services/auth.service";
import { getMeAction, getMeError, getMeSuccess } from "../actions/get-me.action";
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { UserInterface } from "../../../shared/interfaces/user.interface";
import { Router } from "@angular/router";


@Injectable({
    providedIn: 'root'
})
export class MeEffect{
    constructor(private authService : AuthService, private router: Router){}
        
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

        getMeSuccess = createEffect(
            () => this.actions$.pipe(
                ofType(getMeSuccess),
                tap(({user}) => !user.roles?.includes('ROLE_ADMIN') ? this.router.navigate(['/student']) : this.router.navigate(['/admin']))
            ), 
            {dispatch: false}
        )

}