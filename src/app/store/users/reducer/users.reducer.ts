import { createReducer, on } from "@ngrx/store"
import { signUpError } from "../actions/sign-up.actions";
import { User } from "../../../models/user.models";
import { signInError, signInSuccess } from "../actions/sign-in.actions";

export interface MeState{
    me? : User,
    error?: any
    
}

const usersInitialState : MeState = {
}

export const usersReducer = createReducer(usersInitialState,
    on(signUpError, (state, {error}) => {
        return {
            ...state,
            me: undefined,
            error
        }
    }),
    on(signInError, (state, {error}) => {
        return {
            ...state,
            me: undefined,
            error
        }
    })
);