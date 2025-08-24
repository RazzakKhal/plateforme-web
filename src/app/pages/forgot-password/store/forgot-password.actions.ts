import { createAction, props } from '@ngrx/store';
import { ErrorApi } from '../../../shared/models/error-api.model';

export const forgotPassword = createAction(
  'forgotPassword',
  props<{ mail: string }>()
);
export const forgotPasswordSuccess = createAction('forgotPasswordSuccess');
export const forgotPasswordError = createAction(
  'forgotPasswordError',
  props<{ error: ErrorApi }>()
);

export const forgotPasswordClearError = createAction(
  'forgotPasswordClearError'
);
export const forgotPasswordClearSuccess = createAction(
  'forgotPasswordClearSuccess'
);
