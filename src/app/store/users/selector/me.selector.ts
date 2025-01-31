import { createSelector } from "@ngrx/store";
import { Store } from "../../store.interface";

export const getMe = createSelector((state: Store) => state.meState, (user) => user)