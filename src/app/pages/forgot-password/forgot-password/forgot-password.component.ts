import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  standalone: false,
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {

  resetPasswordForm : FormGroup;


  constructor(private readonly authService : AuthService){
    this.resetPasswordForm = new FormGroup({
      mail : new FormControl('', [Validators.required, Validators.email]),
    })
  }

  resetPassword(mail : string){
    if(this.resetPasswordForm.valid){
      this.authService.sendForgotPasswordMail(mail).subscribe()
      console.log('mail')
    }
  }


}
