import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as MeActions from '../actions/get-me.action';
import * as MeSelectors from '../selectors/me.selector';
import { UserRequestInterface } from '../../../shared/interfaces/user-request.interface';

@Injectable({
  providedIn: 'root',
})
export class MeFacadeService {
  private readonly store = inject(Store);

  readonly user$ = this.store.select(MeSelectors.getMe);
  readonly error$ = this.store.select(MeSelectors.getMeError);
  readonly isUpdating$ = this.store.select(MeSelectors.getMeIsUpdating);

  updateMe(user: UserRequestInterface) {
    this.store.dispatch(MeActions.updateMe({ user }));
  }

  clearError() {
    this.store.dispatch(MeActions.clearMeError());
  }
}
