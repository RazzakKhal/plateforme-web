import { createReducer, on } from "@ngrx/store"
import { addUser } from "../actions/users.actions";

const usersInitialState = {
    users : [] as any[]
}

export const usersReducer = createReducer(usersInitialState,
    on(addUser, (state, {user}) => {
       return {
        ...state,
        users : [...state.users, user]
    }
    })
);