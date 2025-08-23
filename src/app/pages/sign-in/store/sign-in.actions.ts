import { createAction, props } from '@ngrx/store';
import { LoginForm } from '../../../shared/models/login-form.models';
import { SignInResponse } from '../models/signInResponse.interface';

export const signIn = createAction('signIn', props<{ loginForm: LoginForm }>());
export const signInSuccess = createAction(
  'signInSuccess',
  props<{ signInResponse: SignInResponse }>()
);
export const signInError = createAction('signInError', props<{ error: any }>());
export const signInClearError = createAction('signInClearError');
