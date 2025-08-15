import { inject, Injectable } from '@angular/core';
import { ResetPasswordApiService } from '../services/reset-password-api.service';
import { ResetPasswordDomainService } from '../services/reset-password-domain.service';
import { ResetPasswordDto } from '../models/reset-password.dto';
import { Store } from '@ngrx/store';
import * as ResetPasswordActions from '../store/reset-password.actions';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordFacadeService {

  private readonly store = inject(Store);


  updatePassword(resetPasswordDto : ResetPasswordDto){
    this.store.dispatch(ResetPasswordActions.resetPassword({resetPasswordDto}))
  }
}
