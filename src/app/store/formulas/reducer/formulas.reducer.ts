import { createReducer, on } from "@ngrx/store";
import { Formula } from "../../../shared/interfaces/formula.interface";
import { getAllFormulasSuccess } from "../actions/get-all-formulas";

export interface FormulaState{
    userFormula? : Formula;
    allFormulas? : Formula[];
    error?: any;
    
}

const formulaInitialState : FormulaState= {
}

export const formulaReducer = createReducer(formulaInitialState,

    on(getAllFormulasSuccess, (state, {allFormulas}) => {
        return {
            ...state,
            allFormulas
        }
    }),

);