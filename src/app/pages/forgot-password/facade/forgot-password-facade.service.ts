import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as ForgotPasswordActions from '../store/forgot-password.actions';
import * as ForgotPasswordSelectors from '../store/forgot-password.selectors';

@Injectable({
  providedIn: 'root',
})
export class ForgotPasswordFacadeService {
  private readonly store = inject(Store);

  readonly error$ = this.store.select(ForgotPasswordSelectors.getError);
  readonly success$ = this.store.select(ForgotPasswordSelectors.getSuccess);

  sendMail(mail: string) {
    this.store.dispatch(ForgotPasswordActions.forgotPassword({ mail }));
  }

  clearError() {
    this.store.dispatch(ForgotPasswordActions.forgotPasswordClearError());
  }

  clearSuccess() {
    this.store.dispatch(ForgotPasswordActions.forgotPasswordClearSuccess());
  }
}
