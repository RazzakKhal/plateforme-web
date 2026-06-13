import { createAction, props } from "@ngrx/store";
import { UserInterface } from "../../../shared/interfaces/user.interface";
import { UserRequestInterface } from "../../../shared/interfaces/user-request.interface";

export const getMeAction = createAction('getMe');
export const getMeSuccess = createAction('getMeSuccess', props<{user: UserInterface}>())
export const getMeError = createAction('getMeError', props<{error: any}>())
export const updateMe = createAction('updateMe', props<{user: UserRequestInterface}>())
export const updateMeSuccess = createAction('updateMeSuccess', props<{user: UserInterface}>())
export const updateMeError = createAction('updateMeError', props<{error: any}>())
export const clearMeError = createAction('clearMeError')
