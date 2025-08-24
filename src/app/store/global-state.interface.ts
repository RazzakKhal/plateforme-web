import { ForgotPasswordState } from '../pages/forgot-password/store/forgot-password.reducer';
import { ResetPasswordState } from '../pages/reset-password/store/reset-password.reducer';
import { SignInState } from '../pages/sign-in/store/sign-in.reducer';
import { SignUpState } from '../pages/sign-up/store/sign-up.reducer';
import { FormulaState } from './formulas/reducer/formulas.reducer';
import { MeState } from './users/reducer/users.reducer';

export interface GlobalState {
  meState: MeState;
  formulaState: FormulaState;
  signInState: SignInState;
  signUpState: SignUpState;
  resetPasswordState: ResetPasswordState;
  forgotPasswordState: ForgotPasswordState;
}
