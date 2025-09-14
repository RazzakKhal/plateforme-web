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

  /**
   * handle deleting
   */

  deleteFormula = createEffect(() =>
    this.actions$.pipe(
      ofType(FormulaActions.deleteFormula),
      mergeMap(({ formulaId }) =>
        this.formulaService.deleteFormula(formulaId).pipe(
          map(() => FormulaActions.deleteFormulaSuccess({ formulaId })),
          catchError((error) =>
            of(FormulaActions.deleteFormulaError({ error }))
          )
        )
      )
    )
  );

  deleteFormulaSuccess = createEffect(
    () =>
      this.actions$.pipe(
        ofType(FormulaActions.deleteFormulaSuccess),
        tap(() => console.info('suppression formule ok'))
      ),
    { dispatch: false }
  );

  /**
   * handle updating
   */
  updateFormula = createEffect(() =>
    this.actions$.pipe(
      ofType(FormulaActions.editFormula),
      mergeMap(({ formula }) =>
        this.formulaService.updateFormula(formula).pipe(
          map(() => FormulaActions.editFormulaSuccess({ formula })),
          catchError((error) => of(FormulaActions.editFormulaError({ error })))
        )
      )
    )
  );

  updateFormulaSuccess = createEffect(
    () => this.actions$.pipe(ofType(FormulaActions.editFormula)),
    { dispatch: false }
  );
}
