import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as FormulaActions from '../store/formula.actions';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { Formula } from '../models/formula.model';
import { FormulaApiService } from '../services/formula-api.service';
import { PageResponse } from '../../../../../shared/interfaces/page.interface';

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
          map((page: PageResponse<Formula>) =>
            FormulaActions.getAllFormulasSuccess({ allFormulas: page.content }),
          ),
          catchError((error) =>
            of(FormulaActions.getAllFormulasError({ error })),
          ),
        ),
      ),
    ),
  );

  getAllFormulasSuccess = createEffect(
    () => this.actions$.pipe(ofType(FormulaActions.getAllFormulasSuccess)),
    { dispatch: false },
  );

  getFormula = createEffect(() =>
    this.actions$.pipe(
      ofType(FormulaActions.getFormula),
      mergeMap((userId) =>
        this.formulaService.getFormula(userId.formulaId).pipe(
          map((formula: Formula) =>
            FormulaActions.getFormulaSuccess({ formula }),
          ),
          catchError((error) => of(FormulaActions.getFormulaError({ error }))),
        ),
      ),
    ),
  );

  getFormulaSuccess = createEffect(
    () =>
      this.actions$.pipe(
        ofType(FormulaActions.getFormulaSuccess),
        tap(({ formula }) => console.info('la formule: ' + formula)),
      ),
    { dispatch: false },
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
            of(FormulaActions.deleteFormulaError({ error })),
          ),
        ),
      ),
    ),
  );

  deleteFormulaSuccess = createEffect(
    () =>
      this.actions$.pipe(
        ofType(FormulaActions.deleteFormulaSuccess),
        tap(() => console.info('suppression formule ok')),
      ),
    { dispatch: false },
  );

  /**
   * handle updating
   */
  updateFormula = createEffect(() =>
    this.actions$.pipe(
      ofType(FormulaActions.editFormula),
      mergeMap(({ formula }) =>
        this.formulaService.updateFormula(formula).pipe(
          map((response) =>
            FormulaActions.editFormulaSuccess({ formula: response }),
          ),
          catchError((error) => of(FormulaActions.editFormulaError({ error }))),
        ),
      ),
    ),
  );

  updateFormulaSuccess = createEffect(
    () => this.actions$.pipe(ofType(FormulaActions.editFormula)),
    { dispatch: false },
  );

  /**
   * handle adding
   */
  addFormula = createEffect(() =>
    this.actions$.pipe(
      ofType(FormulaActions.addFormula),
      mergeMap(({ formula }) =>
        this.formulaService.addFormula(formula).pipe(
          map((response) =>
            FormulaActions.addFormulaSuccess({ formula: response }),
          ),
          catchError((error) => of(FormulaActions.addFormulaError({ error }))),
        ),
      ),
    ),
  );

  addFormulaSuccess = createEffect(
    () => this.actions$.pipe(ofType(FormulaActions.addFormulaSuccess)),
    { dispatch: false },
  );
}
