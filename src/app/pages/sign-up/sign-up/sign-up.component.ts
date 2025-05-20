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

  myForm : FormGroup;


  constructor(private store: Store){
    this.myForm = new FormGroup({
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
    if(this.myForm.valid){
      const address = new Address(this.myForm.get('addressLine')?.value, this.myForm.get('city')?.value, this.myForm.get('postalCode')?.value)
      const user = new User(this.myForm.get('firstname')?.value, this.myForm.get('lastname')?.value, this.myForm.get('mail')?.value, this.myForm.get('password')?.value, this.myForm.get('phone')?.value, address)

    this.store.dispatch(signUpAction({user : user}))
    }
  }
}
