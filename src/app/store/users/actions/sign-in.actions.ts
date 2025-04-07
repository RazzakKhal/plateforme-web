import { createAction, props } from "@ngrx/store"
import { LoginForm } from "../../../shared/models/login-form.models"
import { SignInResponse } from "../../../shared/interfaces/signInResponse.interface"

export const signInAction = createAction('signIn', props<{loginForm: LoginForm}>())
export const signInSuccess = createAction('signInSuccess', props<{signInResponse : SignInResponse}>())
export const signInError = createAction('signInError', props<{error: any}>())