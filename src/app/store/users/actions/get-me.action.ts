import { createAction, props } from "@ngrx/store";
import { UserInterface } from "../../../shared/interfaces/user.interface";

export const getMeAction = createAction('getMe');
export const getMeSuccess = createAction('getMeSuccess', props<{user: UserInterface}>())
export const getMeError = createAction('getMeError', props<{error: any}>())