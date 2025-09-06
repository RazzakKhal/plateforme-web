import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'p-toggle-input',
  standalone: false,
  templateUrl: './p-toggle-input.component.html',
  styleUrls: ['./p-toggle-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PToggleInputComponent),
      multi: true,
    },
  ],
})
export class PToggleInputComponent implements ControlValueAccessor {
  @Input() labelValue!: string;
  @Input() inputId!: string;
  @Input() isRequired = false;
  @Input() isFormSubmitted = false;
  @Input() isValid = false;

  /** Valeur exposée au formulaire */
  value = false;
  isDisabled = false;

  private onChange: (val: boolean) => void = () => {};
  onTouched: () => void = () => {};

  // ControlValueAccessor
  writeValue(val: boolean | null): void {
    this.value = !!val;
  }
  registerOnChange(fn: (val: boolean) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  // UI -> Form
  onToggle(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value = !!input.checked;
    this.onChange(this.value);
    this.onTouched();
  }
}
