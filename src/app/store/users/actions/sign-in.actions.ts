import { createAction, props } from "@ngrx/store"
import { LoginForm } from "../../../models/login-form.models"

export const signInAction = createAction('signIn', props<{loginForm: LoginForm}>())
export const signInError = createAction('signInError', props<{error: any}>())