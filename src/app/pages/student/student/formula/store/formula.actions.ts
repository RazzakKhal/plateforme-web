import { createAction, props } from '@ngrx/store';
import { Formula } from '../models/formula.model';

/**
 * gestion pour récupérer l'ensemble des formules
 */

export const getAllFormulas = createAction('getAllFormulas');
export const getAllFormulasSuccess = createAction(
  'getAllFormulasSuccess',
  props<{ allFormulas: Formula[] }>()
);
export const getAllFormulasError = createAction(
  'getAllFormulasError',
  props<{ error: any }>()
);

/**
 * gestion pour récupérer une formule par son id
 */

export const getFormula = createAction(
  'getFormula',
  props<{ formulaId: number }>()
);
export const getFormulaSuccess = createAction(
  'getFormulaSuccess',
  props<{ formula: Formula }>()
);
export const getFormulaError = createAction(
  'getFormulaError',
  props<{ error: any }>()
);
