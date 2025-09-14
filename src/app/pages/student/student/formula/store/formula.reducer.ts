import { createReducer, on } from '@ngrx/store';
import { Formula } from '../models/formula.model';
import * as FormulaActions from '../store/formula.actions';

export interface FormulaState {
  userFormula?: Formula;
  allFormulas?: Formula[];
  error?: any;
}

const formulaInitialState: FormulaState = {};

export const formulaReducer = createReducer(
  formulaInitialState,

  on(FormulaActions.getAllFormulasSuccess, (state, { allFormulas }) => {
    return {
      ...state,
      allFormulas,
    };
  }),
  on(FormulaActions.getFormulaSuccess, (state, { formula }) => {
    return {
      ...state,
      userFormula: formula,
    };
  }),
  on(FormulaActions.deleteFormulaSuccess, (state, { formulaId }) => ({
    ...state,
    allFormulas: state.allFormulas?.filter((f) => f.id !== formulaId),
  })),
  on(FormulaActions.editFormulaSuccess, (state, { formula }) => ({
    ...state,
    allFormulas: [
      ...(state.allFormulas?.filter((f) => f.id !== formula.id) ?? []),
      formula,
    ],
  }))
);
