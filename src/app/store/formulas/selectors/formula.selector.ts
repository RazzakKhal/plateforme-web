import { createSelector } from "@ngrx/store";
import { GlobalState } from "../../global-state.interface";
import { FormulaState } from "../reducer/formulas.reducer";

export const getUserFormula = createSelector((state: GlobalState) => state.formulaState,(state: FormulaState) => state.userFormula)