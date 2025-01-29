import { createAction, props } from "@ngrx/store";
import { User } from "../../../models/user.models";

export const addMe = createAction('addMe', props<{me : User}>())