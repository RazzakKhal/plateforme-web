import { inject, Injectable } from "@angular/core";
import { FormulaService } from "../../../shared/services/formula.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Router } from "@angular/router";
import { getAllFormulasAction, getAllFormulasError, getAllFormulasSuccess } from "../actions/get-all-formulas";
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { Formula } from "../../../shared/interfaces/formula.interface";

@Injectable({
    providedIn: 'root'
})
export class AllFormulasEffect{
    constructor(private formulaService : FormulaService, private router: Router){}
        
        private actions$ = inject(Actions);

        getFormulas = createEffect(
            () => this.actions$.pipe(
                ofType(getAllFormulasAction),
                tap(() => console.log('hey jai ete emis')),
                mergeMap(
                    () => this.formulaService.getAllFormulas().pipe(
                        map((allFormulas : Formula[]) => getAllFormulasSuccess({allFormulas})),
                        catchError((error) => of(getAllFormulasError({ error })))
                    )
                )
            )
        )

        getFormulasSuccess = createEffect(
            () => this.actions$.pipe(
                ofType(getAllFormulasSuccess),
                tap(({allFormulas}) => console.log('les formules: ' + allFormulas))
            ), 
            {dispatch: false}
        )

}