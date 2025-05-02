import { createAction, props } from "@ngrx/store";
import { Formula } from "../../../shared/interfaces/formula.interface";

export const getFormulaAction = createAction('getFormula', props<{formulaId: number}>());
export const getFormulaSuccess = createAction('getFormulaSuccess', props<{formula: Formula}>())
export const getFormulaError = createAction('getFormulaError', props<{error: any}>())