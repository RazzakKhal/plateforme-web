import { createSelector } from "@ngrx/store";

export const getUsers = createSelector((state: any) => state.usersState, (st) => st);