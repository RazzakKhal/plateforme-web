import { createReducer, on } from '@ngrx/store';
import { ErrorApi } from '../../../shared/models/error-api.model';
import * as ForgotPasswordActions from '../store/forgot-password.actions';

export interface ForgotPasswordState {
  success: boolean | undefined;
  loading: boolean | undefined;
  error: ErrorApi | null;
}

export const initialState: ForgotPasswordState = {
  success: false,
  loading: false,
  error: null,
};

export const forgotPasswordReducer = createReducer(
  initialState,
  on(ForgotPasswordActions.forgotPasswordSuccess, (state) => ({
    ...state,
    success: true,
    loading: false,
    error: null,
  })),
  on(ForgotPasswordActions.forgotPasswordError, (state, { error }) => ({
    ...state,
    success: false,
    loading: false,
    error,
  })),
  on(ForgotPasswordActions.forgotPasswordClearError, (state) => ({
    ...state,
    success: false,
    loading: false,
    error: null,
  })),
  on(ForgotPasswordActions.forgotPasswordClearSuccess, (state) => ({
    ...state,
    success: false,
    loading: false,
    error: null,
  }))
);
