import { createSelector } from '@ngrx/store';
import { GlobalState } from '../../../../../store/global-state.interface';
import { FormulaState } from './formula.reducer';

export const getAllFormulas = createSelector(
  (state: GlobalState) => state.formulaState,
  (state: FormulaState) => state.allFormulas
);

export const getUserFormula = createSelector(
  (state: GlobalState) => state.formulaState,
  (state: FormulaState) => state.userFormula
);
