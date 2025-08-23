import { createSelector } from '@ngrx/store';
import { GlobalState } from '../../../store/global-state.interface';
import { SignInState } from './sign-in.reducer';

export const getSuccess = createSelector(
  (state: GlobalState) => state.signInState,
  (state: SignInState) => state.success
);
export const getLoading = createSelector(
  (state: GlobalState) => state.signInState,
  (state: SignInState) => state.loading
);
export const getError = createSelector(
  (state: GlobalState) => state.signInState,
  (state: SignInState) => state.error
);
