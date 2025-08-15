import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordMatch(group: AbstractControl): ValidationErrors | null {
  const password = group.get('password')?.value;
  const confirm  = group.get('validatePassword')?.value;
  return password && confirm && password !== confirm ? { passwordsMismatch: true } : null;
};
