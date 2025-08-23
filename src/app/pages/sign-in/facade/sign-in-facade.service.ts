import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as SignInActions from '../store/sign-in.actions';
import * as SignInSelectors from '../store/sign-in.selectors';
import { LoginForm } from '../../../shared/models/login-form.models';

@Injectable({
  providedIn: 'root',
})
export class SignInFacadeService {
  private readonly store = inject(Store);

  readonly error$ = this.store.select(SignInSelectors.getError);

  signIn(form: LoginForm) {
    this.store.dispatch(SignInActions.signIn({ loginForm: form }));
  }

  clearError() {
    this.store.dispatch(SignInActions.signInClearError());
  }
}
