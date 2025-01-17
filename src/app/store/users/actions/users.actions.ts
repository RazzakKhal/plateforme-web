import { createAction, props } from "@ngrx/store";

export const addUser = createAction('addUser', props<{user : any}>())
export const notif = createAction('notification')