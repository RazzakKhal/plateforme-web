import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { User } from '../../../models/user.models';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone:false,
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  myForm : FormGroup;


  constructor(private authService : AuthService){
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

    this.authService.signUp(user).subscribe((user) => console.log('mon user', user))
    }
  }
}
