import { createReducer, on } from '@ngrx/store';
import { ErrorApi } from '../../../shared/models/error-api.model';
import * as ResetPasswordActions from '../store/reset-password.actions';

export interface ResetPasswordState {
  success: boolean | undefined;
  loading: boolean | undefined;
  error: ErrorApi | null;
}

export const initialState: ResetPasswordState = {
  success: false,
  loading: false,
  error: null,
};

export const resetPasswordReducer = createReducer(
  initialState,
  on(ResetPasswordActions.resetPasswordSuccess, (state) => ({
    ...state,
    success: true,
    loading: false,
    error: null,
  })),
  on(ResetPasswordActions.resetPasswordError, (state, { error }) => ({
    ...state,
    success: false,
    loading: false,
    error,
  })),
  on(ResetPasswordActions.resetPasswordClearError, (state) => ({
    ...state,
    success: false,
    loading: false,
    error: null,
  }))
);
