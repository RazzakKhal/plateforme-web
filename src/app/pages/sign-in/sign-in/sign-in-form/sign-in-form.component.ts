import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-in-form',
  standalone: false,
  templateUrl: './sign-in-form.component.html',
  styleUrl: './sign-in-form.component.css'
})
export class SignInFormComponent {
  @Input() myForm!: FormGroup
  @Output() signInEmitter = new EventEmitter<void>();

  isFormSubmitted = false;


  signIn() {
    this.isFormSubmitted = true;
    this.signInEmitter.emit();
  }
}
