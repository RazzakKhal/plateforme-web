import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { Store } from '@ngrx/store';
import { LoginForm } from '../../../models/login-form.models';
import { signInAction } from '../../../store/users/actions/sign-in.actions';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
  standalone: false
})
export class SignInComponent {
  myForm : FormGroup;


  constructor(private authService : AuthService, private store: Store){
    this.myForm = new FormGroup({
      mail : new FormControl('', [Validators.required]),
      password : new FormControl('', [Validators.required])
    })
  }


  signIn(){
    if(this.myForm.valid){
      const form = new LoginForm(this.myForm.get('mail')?.value, this.myForm.get('password')?.value)
    this.store.dispatch(signInAction({loginForm : form}))

 console.log('on est la')
    }
  }
}
