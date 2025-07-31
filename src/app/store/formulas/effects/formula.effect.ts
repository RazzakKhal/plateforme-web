import { inject, Injectable } from "@angular/core";
import { FormulaService } from "../../../shared/services/formula.service";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { getFormulaAction, getFormulaError, getFormulaSuccess } from "../actions/get-formula";
import { Formula } from "../../../shared/interfaces/formula.interface";

@Injectable({
    providedIn: 'root'
})
export class FormulaEffect{
    constructor(private formulaService : FormulaService, private router: Router){}
        
        private actions$ = inject(Actions);

        getFormula = createEffect(
            () => this.actions$.pipe(
                ofType(getFormulaAction),
                mergeMap(
                    (userId) => this.formulaService.getFormula(userId.formulaId).pipe(
                        map((formula : Formula) => getFormulaSuccess({formula})),
                        catchError((error) => of(getFormulaError({ error })))
                    )
                )
            )
        )

        getFormulaSuccess = createEffect(
            () => this.actions$.pipe(
                ofType(getFormulaSuccess),
                tap(({formula}) => console.info('la formule: ' + formula))
            ), 
            {dispatch: false}
        )

}