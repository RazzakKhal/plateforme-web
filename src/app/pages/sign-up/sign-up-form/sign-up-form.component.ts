import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up-form',
  standalone: false,
  templateUrl: './sign-up-form.component.html',
  styleUrl: './sign-up-form.component.css'
})
export class SignUpFormComponent {

  @Input() myForm!: FormGroup
  @Output() signUpEmitter = new EventEmitter<void>()

  isFormSubmitted = false;

  signUp() {
    this.isFormSubmitted = true
    this.signUpEmitter.emit()
  }
}
