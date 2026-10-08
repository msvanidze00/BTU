import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function noAdminValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = control.value?.toLowerCase() === 'admins';
    return forbidden ? { noadmin: { value: control.value } } : null;
  };
}
