import {
  Component,
  forwardRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormArray,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'p-input-list',
  standalone: false,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PInputListComponent),
      multi: true,
    },
  ],
  templateUrl: './pinput-list.component.html',
  styleUrl: './pinput-list.component.css',
})
export class PInputListComponent implements ControlValueAccessor {
  @Input() labelValue!: string;

  formArray = new FormArray<FormControl<string | null>>([]);

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(values: string[]): void {
    this.formArray.clear();
    if (values) {
      values.forEach((value) => this.formArray.push(new FormControl(value)));
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
    this.formArray.valueChanges.subscribe(fn); // sync to parent form
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  addInput(): void {
    this.formArray.push(new FormControl(''));
    this.onChange(this.formArray.value);
  }

  removeInput(index: number): void {
    this.formArray.removeAt(index);
    this.onChange(this.formArray.value);
  }
}
