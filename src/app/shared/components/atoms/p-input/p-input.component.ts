import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'p-input',
  standalone: false,
  templateUrl: './p-input.component.html',
  styleUrl: './p-input.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PInputComponent),
      multi: true
    }
  ]
})
export class PInputComponent implements ControlValueAccessor {

  @Input() type!: string;
  @Input() labelValue!: string;
  @Input() placeholder!: string;
  @Input() inputId!: string;
  @Input() isRequired: boolean = false;


  /**
   * tout ce qui suit est lié au fonctionnement de l'input à travers le système d eformulaire d'angular
   */

  value: string = '';
  isDisabled: boolean = false;
  onChange = (value: any) => { };
  onTouched = () => { };

  writeValue(value: any): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }


  updateValue(event: any) {
    const val = event.target.value;
    this.value = val;
    this.onChange(val);
    this.onTouched();
  }


}
