import { createSelector } from '@ngrx/store';
import { GlobalState } from '../../../store/global-state.interface';
import { ForgotPasswordState } from './forgot-password.reducer';

export const getSuccess = createSelector(
  (state: GlobalState) => state.forgotPasswordState,
  (state: ForgotPasswordState) => state.success
);
export const getLoading = createSelector(
  (state: GlobalState) => state.forgotPasswordState,
  (state: ForgotPasswordState) => state.loading
);
export const getError = createSelector(
  (state: GlobalState) => state.forgotPasswordState,
  (state: ForgotPasswordState) => state.error
);
