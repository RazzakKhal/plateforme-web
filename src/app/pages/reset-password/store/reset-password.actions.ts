import { createAction, props } from '@ngrx/store';
import { ResetPasswordDto } from '../models/reset-password.dto';
import { TokenDto } from '../models/token.dto';
import { ErrorApi } from '../../../shared/models/error-api.model';

export const resetPassword = createAction(
  'resetPassword',
  props<{ resetPasswordDto: ResetPasswordDto }>()
);
export const resetPasswordSuccess = createAction(
  'resetPasswordSuccess',
  props<TokenDto>()
);
export const resetPasswordError = createAction(
  'resetPasswordError',
  props<{ error: ErrorApi }>()
);

export const resetPasswordClearError = createAction('resetPasswordClearError');
export const resetPasswordClearSuccess = createAction(
  'resetPasswordClearSuccess'
);
