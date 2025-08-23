import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as SignUpActions from '../store/sign-up.actions';
import * as SignUpSelectors from '../store/sign-up.selectors';
import { User } from '../../../shared/models/user.models';

@Injectable({
  providedIn: 'root',
})
export class SignUpFacadeService {
  private readonly store = inject(Store);

  readonly error$ = this.store.select(SignUpSelectors.getError);

  signUp(user: User) {
    this.store.dispatch(SignUpActions.signUp({ user: user }));
  }

  clearError() {
    this.store.dispatch(SignUpActions.signUpClearError());
  }
}
