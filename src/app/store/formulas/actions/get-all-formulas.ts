import { createAction, props } from "@ngrx/store";
import { Formula } from "../../../shared/interfaces/formula.interface";

export const getAllFormulasAction = createAction('getAllFormulas');
export const getAllFormulasSuccess = createAction('getAllFormulasSuccess', props<{allFormulas: Formula[]}>())
export const getAllFormulasError = createAction('getAllFormulasError', props<{error: any}>())