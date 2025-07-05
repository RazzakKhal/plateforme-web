import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/models/user.models';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { signUpAction } from '../../../store/users/actions/sign-up.actions';
import { Address } from '../../../shared/models/address.model';

@Component({
  selector: 'app-sign-up',
  standalone:false,
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  signUpForm : FormGroup;


  constructor(private store: Store){
    this.signUpForm = new FormGroup({
      firstname : new FormControl('', [Validators.required]),
      lastname : new FormControl('', [Validators.required]),
      mail : new FormControl('', [Validators.required]),
      password : new FormControl('', [Validators.required]),
      phone : new FormControl('', [Validators.required]),
      addressLine : new FormControl('', [Validators.required]),
      city : new FormControl('', [Validators.required]),
      postalCode : new FormControl('', [Validators.required])
    })
  }


  signUp(){
    if(this.signUpForm.valid){
      const address = new Address(this.signUpForm.get('addressLine')?.value, this.signUpForm.get('city')?.value, this.signUpForm.get('postalCode')?.value)
      const user = new User(this.signUpForm.get('firstname')?.value, this.signUpForm.get('lastname')?.value, this.signUpForm.get('mail')?.value, this.signUpForm.get('password')?.value, this.signUpForm.get('phone')?.value, address)

    this.store.dispatch(signUpAction({user : user}))
    }
  }
}
