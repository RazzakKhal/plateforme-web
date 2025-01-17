import { createReducer, on } from "@ngrx/store"
import { addUser, notif } from "../actions/users.actions";

const usersInitialState = {
    users : [] as any[]
}

export const usersReducer = createReducer(usersInitialState,
    on(addUser, (state, {user}) => {
        console.log('on est dans le on de addUser')
       return {
        ...state,
        users : [...state.users, user]
    }
    }),
    on(notif, (state) => {console.log("l'action est ok"); return state})
);