import { createReducer, on } from "@ngrx/store"
import { addMe, signUpError } from "../actions/sign-up.actions";
import { User } from "../../../models/user.models";
import { signInError } from "../actions/sign-in.actions";

export interface MeState{
    me? : User,
    error?: any
    
}

const usersInitialState : MeState = {
}

export const usersReducer = createReducer(usersInitialState,
    on(addMe, (state, {me}) => {
        console.log("on est dans le reducer", me)
       return {
        ...state,
        me,
        error: undefined
    }
    }),
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