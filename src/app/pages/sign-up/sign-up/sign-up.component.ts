import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { User } from '../../../models/user.models';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { signUpAction } from '../../../store/users/actions/sign-up.actions';

@Component({
  selector: 'app-sign-up',
  standalone:false,
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  myForm : FormGroup;


  constructor(private authService : AuthService, private store: Store){
    this.myForm = new FormGroup({
      firstname : new FormControl('', [Validators.required]),
      lastname : new FormControl('', [Validators.required]),
      mail : new FormControl('', [Validators.required]),
      password : new FormControl('', [Validators.required])
    })
  }


  signUp(){
    if(this.myForm.valid){
      const user = new User(this.myForm.get('firstname')?.value, this.myForm.get('lastname')?.value, this.myForm.get('mail')?.value, this.myForm.get('password')?.value)

    this.store.dispatch(signUpAction({user : user}))
  //  this.authService.signUp(user).subscribe((user) => console.log('mon user', user))
    }
  }
}
