import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { Store } from '@ngrx/store';
import { LoginForm } from '../../../shared/models/login-form.models';
import { signInAction } from '../../../store/users/actions/sign-in.actions';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
  standalone: false
})
export class SignInComponent {
  signInForm : FormGroup;


  constructor(private store: Store){
    this.signInForm = new FormGroup({
      mail : new FormControl('', [Validators.required]),
      password : new FormControl('', [Validators.required])
    })
  }


  signIn(){
    if(this.signInForm.valid){
      const form = new LoginForm(this.signInForm.get('mail')?.value, this.signInForm.get('password')?.value)
      this.store.dispatch(signInAction({loginForm : form}))
    }
  }
}
