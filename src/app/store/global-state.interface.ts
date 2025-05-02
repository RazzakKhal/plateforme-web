import { FormulaState } from "./formulas/reducer/formulas.reducer";
import { MeState } from "./users/reducer/users.reducer";

export interface GlobalState {
    meState: MeState;
    formulaState : FormulaState;
}