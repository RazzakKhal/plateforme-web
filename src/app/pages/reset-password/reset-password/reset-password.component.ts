import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ResetPasswordFacadeService } from '../facade/reset-password-facade.service';
import { ResetPasswordDto } from '../models/reset-password.dto';
import { passwordMatch } from '../../../shared/validators/password-match.validator';

@Component({
  selector: 'app-reset-password',
  standalone: false,
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css',
})
export class ResetPasswordComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private facade = inject(ResetPasswordFacadeService);
  private token!: string;

  isFormSubmitted = false;
  resetForm = new FormGroup(
    {
      password: new FormControl('', [Validators.required]),
      validatePassword: new FormControl('', [Validators.required]), // ajouter validator ou il est egal à l'autre password
    },
    { validators: passwordMatch }
  );

  ngOnInit(): void {
    this.token = this.route.snapshot.params['token'];
  }

  onSubmitResetForm() {
    this.isFormSubmitted = true;
    if (this.resetForm.valid) {
      console.log('cest emis ', this.resetForm);
      this.facade.updatePassword({
        password: this.resetForm.controls.password.value,
        token: this.token,
      } as ResetPasswordDto);
    }
  }
}
