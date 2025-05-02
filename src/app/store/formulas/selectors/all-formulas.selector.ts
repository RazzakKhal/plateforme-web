import { createSelector } from "@ngrx/store";
import { GlobalState } from "../../global-state.interface";
import { FormulaState } from "../reducer/formulas.reducer";

export const getAllFormulas = createSelector((state: GlobalState) => state.formulaState,(state: FormulaState) => state.allFormulas)