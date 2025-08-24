import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { ForgotPasswordFacadeService } from '../facade/forgot-password-facade.service';

@Component({
  selector: 'app-forgot-password',
  standalone: false,
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css',
})
export class ForgotPasswordComponent {
  private readonly facade = inject(ForgotPasswordFacadeService);

  readonly error$ = this.facade.error$;
  readonly success$ = this.facade.success$;

  resetPasswordForm: FormGroup;

  constructor() {
    this.resetPasswordForm = new FormGroup({
      mail: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  resetPassword(mail: string) {
    if (this.resetPasswordForm.valid) {
      this.facade.sendMail(mail);
    }
  }

  clearError() {
    this.facade.clearError();
  }

  clearSuccess() {
    this.facade.clearSuccess();
  }
}
