import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  standalone: false,
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {

  resetPasswordForm : FormGroup;


  constructor(){
    this.resetPasswordForm = new FormGroup({
      mail : new FormControl('', [Validators.required, Validators.email]),
    })
  }

  resetPassword(mail : string){
    if(this.resetPasswordForm.valid){
      //envoyé l'email
      console.log('mail')
    }
  }


}
