import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as FormulaActions from '../store/formula.actions';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { Formula } from '../models/formula.model';
import { FormulaApiService } from '../services/formula-api.service';

@Injectable({
  providedIn: 'root',
})
export class FormulaEffect {
  private readonly formulaService = inject(FormulaApiService);
  private readonly actions$ = inject(Actions);

  getAllFormulas = createEffect(() =>
    this.actions$.pipe(
      ofType(FormulaActions.getAllFormulas),
      mergeMap(() =>
        this.formulaService.getAllFormulas().pipe(
          map((allFormulas: Formula[]) =>
            FormulaActions.getAllFormulasSuccess({ allFormulas })
          ),
          catchError((error) =>
            of(FormulaActions.getAllFormulasError({ error }))
          )
        )
      )
    )
  );

  getAllFormulasSuccess = createEffect(
    () => this.actions$.pipe(ofType(FormulaActions.getAllFormulasSuccess)),
    { dispatch: false }
  );

  getFormula = createEffect(() =>
    this.actions$.pipe(
      ofType(FormulaActions.getFormula),
      mergeMap((userId) =>
        this.formulaService.getFormula(userId.formulaId).pipe(
          map((formula: Formula) =>
            FormulaActions.getFormulaSuccess({ formula })
          ),
          catchError((error) => of(FormulaActions.getFormulaError({ error })))
        )
      )
    )
  );

  getFormulaSuccess = createEffect(
    () =>
      this.actions$.pipe(
        ofType(FormulaActions.getFormulaSuccess),
        tap(({ formula }) => console.info('la formule: ' + formula))
      ),
    { dispatch: false }
  );
}
