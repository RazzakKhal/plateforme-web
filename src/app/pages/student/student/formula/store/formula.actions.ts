import { createAction, props } from '@ngrx/store';
import { Formula } from '../models/formula.model';
import { Uuid } from '../../../../../shared/types/uuid.type';

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
  props<{ formulaId: Uuid }>()
);
export const getFormulaSuccess = createAction(
  'getFormulaSuccess',
  props<{ formula: Formula }>()
);
export const getFormulaError = createAction(
  'getFormulaError',
  props<{ error: any }>()
);

/**
 * gestion pour supprimer une formule par son id
 */

export const deleteFormula = createAction(
  'deleteFormula',
  props<{ formulaId: Uuid }>()
);
export const deleteFormulaSuccess = createAction(
  'deleteFormulaSuccess',
  props<{ formulaId: Uuid }>()
);
export const deleteFormulaError = createAction(
  'deleteFormulaError',
  props<{ error: any }>()
);

/**
 * gestion pour modifier une formule
 */
export const editFormula = createAction(
  'editFormula',
  props<{ formula: Formula }>()
);
export const editFormulaSuccess = createAction(
  'editFormulaSuccess',
  props<{ formula: Formula }>()
);
export const editFormulaError = createAction(
  'editFormulaError',
  props<{ error: any }>()
);

/**
 * gestion pour ajouter une formule
 */

export const addFormula = createAction(
  'addFormula',
  props<{ formula: Formula }>()
);
export const addFormulaSuccess = createAction(
  'addFormulaSuccess',
  props<{ formula: Formula }>()
);
export const addFormulaError = createAction(
  'addFormulaError',
  props<{ error: any }>()
);
