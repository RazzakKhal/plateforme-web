import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PInputComponent } from '../../../../shared/components/atoms/p-input/p-input.component';

@Component({
  selector: 'app-forgot-form',
  standalone : false,
  templateUrl: './forgot-form.component.html',
  styleUrl: './forgot-form.component.css'
})
export class ForgotFormComponent {

   @Input() myForm! : FormGroup
   @Output() reset = new EventEmitter<string>()

   isFormSubmitted=false;


   resetPassword(inputComponent : PInputComponent){
    this.isFormSubmitted = true;
    if(this.myForm.controls['mail'].valid){
      this.reset.emit(inputComponent.value)
          console.log(inputComponent)

    }
   }


}
