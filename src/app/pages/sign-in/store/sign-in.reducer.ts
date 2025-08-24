import { createReducer, on } from '@ngrx/store';
import { ErrorApi } from '../../../shared/models/error-api.model';
import * as SignInActions from './sign-in.actions';

export interface SignInState {
  success: boolean | undefined;
  loading: boolean | undefined;
  error: ErrorApi | null;
}

export const initialState: SignInState = {
  success: false,
  loading: false,
  error: null,
};

export const signInReducer = createReducer(
  initialState,
  on(SignInActions.signInSuccess, (state) => ({
    ...state,
    success: true,
    loading: false,
    error: null,
  })),
  on(SignInActions.signInError, (state, { error }) => ({
    ...state,
    success: false,
    loading: false,
    error,
  })),
  on(SignInActions.signInClearError, (state) => ({
    ...state,
    success: false,
    loading: false,
    error: null,
  }))
);
