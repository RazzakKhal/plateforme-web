import { createReducer, on } from "@ngrx/store"
import { signUpError, signUpSuccess } from "../actions/sign-up.actions";
import { signInError, signInSuccess } from "../actions/sign-in.actions";
import { UserInterface } from "../../../shared/interfaces/user.interface";
import { getMeSuccess } from "../actions/get-me.action";

export interface MeState{
    user? : UserInterface,
    error?: any
    
}

const usersInitialState : MeState = {
}

export const usersReducer = createReducer(usersInitialState,

    on(signUpError, (state, {error}) => {
        return {
            ...state,
            user: undefined,
            error
        }
    }),
    on(signInError, (state, {error}) => {
        return {
            ...state,
            user: undefined,
            error
        }
    }),
    on(getMeSuccess, (state, {user}) => {
        return {
            ...state,
            user,
            error: undefined
        }
    })

);