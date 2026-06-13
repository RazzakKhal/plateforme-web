import { createReducer, on } from '@ngrx/store';
import { UserInterface } from '../../../shared/interfaces/user.interface';
import {
  clearMeError,
  getMeError,
  getMeSuccess,
  updateMe,
  updateMeError,
  updateMeSuccess,
} from '../actions/get-me.action';

export interface MeState {
  user?: UserInterface;
  error?: any;
  isUpdating: boolean;
}

const usersInitialState: MeState = {
  isUpdating: false,
};

export const usersReducer = createReducer(
  usersInitialState,

  on(getMeSuccess, (state, { user }) => {
    return {
      ...state,
      user,
      error: undefined,
      isUpdating: false,
    };
  }),
  on(getMeError, (state, { error }) => ({
    ...state,
    error,
    isUpdating: false,
  })),
  on(updateMe, (state) => ({
    ...state,
    error: undefined,
    isUpdating: true,
  })),
  on(updateMeSuccess, (state, { user }) => ({
    ...state,
    user,
    error: undefined,
    isUpdating: false,
  })),
  on(updateMeError, (state, { error }) => ({
    ...state,
    error,
    isUpdating: false,
  })),
  on(clearMeError, (state) => ({
    ...state,
    error: undefined,
  }))
);
