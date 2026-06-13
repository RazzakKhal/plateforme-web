import { Component, inject } from '@angular/core';
import { User } from '../../../shared/models/user.models';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Address } from '../../../shared/models/address.model';
import { SignUpFacadeService } from '../facade/sign-up-facade.service';

@Component({
  selector: 'app-sign-up',
  standalone: false,
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  private readonly facade = inject(SignUpFacadeService);

  readonly error$ = this.facade.error$;

  signUpForm: FormGroup;

  constructor() {
    this.signUpForm = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      mail: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      addressLine: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      postalCode: new FormControl('', [Validators.required]),
    });
  }

  signUp() {
    if (this.signUpForm.valid) {
      const address: Address = {
        addressLine1: this.signUpForm.get('addressLine')?.value,
        city: this.signUpForm.get('city')?.value,
        postalCode: this.signUpForm.get('postalCode')?.value,
        country: 'FR',
      };
      const user: User = {
        firstname: this.signUpForm.get('firstname')?.value,
        lastname: this.signUpForm.get('lastname')?.value,
        mail: this.signUpForm.get('mail')?.value,
        password: this.signUpForm.get('password')?.value,
        phone: this.signUpForm.get('phone')?.value,
        address,
      };

      this.facade.signUp(user);
    }
  }

  clearError() {
    this.facade.clearError();
  }
}
