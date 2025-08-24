import { createSelector } from '@ngrx/store';
import { GlobalState } from '../../../store/global-state.interface';
import { ResetPasswordState } from './reset-password.reducer';

export const getSuccess = createSelector(
  (state: GlobalState) => state.resetPasswordState,
  (state: ResetPasswordState) => state.success
);
export const getLoading = createSelector(
  (state: GlobalState) => state.resetPasswordState,
  (state: ResetPasswordState) => state.loading
);
export const getError = createSelector(
  (state: GlobalState) => state.resetPasswordState,
  (state: ResetPasswordState) => state.error
);
