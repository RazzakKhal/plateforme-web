import { User } from "./user.models";

export interface SignInResponse{
    token: string;
    user: User;
    roles: string[]
}