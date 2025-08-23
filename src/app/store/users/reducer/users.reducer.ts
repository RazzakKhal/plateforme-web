import { createReducer, on } from '@ngrx/store';
import { UserInterface } from '../../../shared/interfaces/user.interface';
import { getMeSuccess } from '../actions/get-me.action';

export interface MeState {
  user?: UserInterface;
  error?: any;
}

const usersInitialState: MeState = {};

export const usersReducer = createReducer(
  usersInitialState,

  on(getMeSuccess, (state, { user }) => {
    return {
      ...state,
      user,
      error: undefined,
    };
  })
);
