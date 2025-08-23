import { createSelector } from '@ngrx/store';
import { GlobalState } from '../../../store/global-state.interface';
import { SignUpState } from './sign-up.reducer';

export const getSuccess = createSelector(
  (state: GlobalState) => state.signUpState,
  (state: SignUpState) => state.success
);
export const getLoading = createSelector(
  (state: GlobalState) => state.signUpState,
  (state: SignUpState) => state.loading
);
export const getError = createSelector(
  (state: GlobalState) => state.signUpState,
  (state: SignUpState) => state.error
);
