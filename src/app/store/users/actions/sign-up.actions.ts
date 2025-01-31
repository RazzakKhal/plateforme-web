import { createAction, props } from "@ngrx/store";
import { User } from "../../../models/user.models";

export const signUpAction = createAction('signUp', props<{user: User}>())
export const addMe = createAction('addMe', props<{me : User}>())
export const signUpError = createAction('signUpError', props<{error: any}>())