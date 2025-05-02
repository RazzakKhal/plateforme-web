import { createSelector } from "@ngrx/store";
import { GlobalState } from "../../global-state.interface";
import { MeState } from "../reducer/users.reducer";

export const getMe = createSelector((state: GlobalState) => state.meState,(state: MeState) => state.user)