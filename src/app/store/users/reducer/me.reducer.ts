import { createReducer, on } from "@ngrx/store";
import { addMe } from "../actions/me.actions";
import { User } from "../../../models/user.models";


interface MeState{
    me : User | null;
}

const initialMeState : MeState= {
    me : null
}

export const meReducer = createReducer(initialMeState, 
    on(addMe, (state, props) => {
        return {
            ...state,
            me : props.me
        }
    }))