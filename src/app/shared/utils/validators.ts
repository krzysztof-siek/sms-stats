import { AbstractControl, ValidationErrors } from '@angular/forms';
import moment from 'moment';

export function monthYearFormatValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  const isValid = moment(value, 'MM/YYYY', true).isValid();
  return isValid ? null : { invalidDate: true };
}


export function positiveIntegerValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  if (value === null || value === undefined || value === '') return null;
  const normalized = String(value).replace(',', '.');
  const isValid = /^[1-9]\d*$/.test(normalized);

  return isValid ? null : { invalidNumber: true };
}
