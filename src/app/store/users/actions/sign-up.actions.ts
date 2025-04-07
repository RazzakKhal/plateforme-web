import { createAction, props } from "@ngrx/store";
import { User } from "../../../shared/models/user.models";
import { SignInResponse } from "../../../shared/interfaces/signInResponse.interface";

export const signUpAction = createAction('signUp', props<{user: User}>())
export const signUpSuccess = createAction('signUpSuccess', props<{signUpResponse : SignInResponse}>())
export const signUpError = createAction('signUpError', props<{error: any}>())