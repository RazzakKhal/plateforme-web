import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginForm } from '../../../shared/models/login-form.models';
import { signInAction } from '../../../store/users/actions/sign-in.actions';
import { SignInFacadeService } from '../facade/sign-in-facade.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
  standalone: false,
})
export class SignInComponent {
  private readonly facade = inject(SignInFacadeService);

  readonly error$ = this.facade.error$;

  signInForm: FormGroup;

  constructor() {
    this.signInForm = new FormGroup({
      mail: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  signIn() {
    if (this.signInForm.valid) {
      const form = new LoginForm(
        this.signInForm.get('mail')?.value,
        this.signInForm.get('password')?.value
      );
      this.facade.signIn(form);
    }
  }

  clearError() {
    this.facade.clearError();
  }
}
