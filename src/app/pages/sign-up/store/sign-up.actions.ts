import { createAction, props } from '@ngrx/store';
import { SignUpResponse } from '../models/sign-up-response.dto';
import { User } from '../../../shared/models/user.models';
import { ErrorApi } from '../../../shared/models/error-api.model';

export const signUp = createAction('signUp', props<{ user: User }>());
export const signUpSuccess = createAction(
  'signUpSuccess',
  props<{ signUpResponse: SignUpResponse }>()
);
export const signUpError = createAction(
  'signUpError',
  props<{ error: ErrorApi }>()
);
export const signUpClearError = createAction('signUpClearError');
