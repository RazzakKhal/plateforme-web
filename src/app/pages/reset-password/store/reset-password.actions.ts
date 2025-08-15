import { createAction, props } from "@ngrx/store";
import { ResetPasswordDto } from "../models/reset-password.dto";
import { TokenDto } from "../models/token.dto";

export const resetPassword = createAction('resetPassword', props<{resetPasswordDto : ResetPasswordDto}>());
export const resetPasswordSuccess = createAction('resetPassword', props<TokenDto>())
export const resetPasswordError = createAction('resetPassword', props<{error: any}>())