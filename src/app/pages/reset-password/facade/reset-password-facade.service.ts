import { inject, Injectable } from '@angular/core';
import { ResetPasswordDto } from '../models/reset-password.dto';
import { Store } from '@ngrx/store';
import * as ResetPasswordActions from '../store/reset-password.actions';
import * as ResetPasswordSelectors from '../store/reset-password.selectors';

@Injectable({
  providedIn: 'root',
})
export class ResetPasswordFacadeService {
  private readonly store = inject(Store);

  readonly error$ = this.store.select(ResetPasswordSelectors.getError);
  readonly success$ = this.store.select(ResetPasswordSelectors.getSuccess);

  updatePassword(resetPasswordDto: ResetPasswordDto) {
    this.store.dispatch(
      ResetPasswordActions.resetPassword({ resetPasswordDto })
    );
  }

  clearError() {
    this.store.dispatch(ResetPasswordActions.resetPasswordClearError());
  }

  clearSuccess() {
    this.store.dispatch(ResetPasswordActions.resetPasswordClearSuccess());
  }
}
