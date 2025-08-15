import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reset-form',
  standalone: false,
  templateUrl: './reset-form.component.html',
  styleUrl: './reset-form.component.css'
})
export class ResetFormComponent {

  @Input() myForm! : FormGroup
  @Input() isFormSubmitted! : boolean;

  @Output() submitResetForm = new EventEmitter();

  onSubmitClickResetForm(){
    this.submitResetForm.emit();
  }

}
