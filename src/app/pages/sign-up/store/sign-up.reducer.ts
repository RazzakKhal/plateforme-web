import { createReducer, on } from '@ngrx/store';
import { ErrorApi } from '../../../shared/models/error-api.model';
import * as SignUpActions from '../store/sign-up.actions';

export interface SignUpState {
  success: boolean | undefined;
  loading: boolean | undefined;
  error: ErrorApi | null;
}

export const initialState: SignUpState = {
  success: false,
  loading: false,
  error: null,
};

export const signUpReducer = createReducer(
  initialState,
  on(SignUpActions.signUpSuccess, (state) => ({
    ...state,
    success: true,
    loading: false,
    error: null,
  })),
  on(SignUpActions.signUpError, (state, { error }) => ({
    ...state,
    success: false,
    loading: false,
    error,
  })),
  on(SignUpActions.signUpClearError, (state) => ({
    ...state,
    success: false,
    loading: false,
    error: null,
  }))
);
