import {Component, inject, ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepicker, MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {ChartService} from '../shared/services/chart.service';
import {provideMomentDateAdapter} from '@angular/material-moment-adapter';
import {default as _rollupMoment, Moment} from 'moment';
import * as _moment from 'moment';
import { MatSnackBar } from '@angular/material/snack-bar';


const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

function monthYearFormatValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  const isValid = moment(value, 'MM/YYYY', true).isValid();
  return isValid ? null : { invalidDate: true };
}

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
  providers: [
    provideMomentDateAdapter(MY_FORMATS),
  ]
})
export class FormComponent {
  form = new FormGroup({
    date: new FormControl<Moment | null>(moment(), [
      Validators.required,
      monthYearFormatValidator]
    ),
    smsCount: new FormControl(null, {
      validators: [Validators.required, Validators.min(1), Validators.pattern(/^[1-9]\d*$/)],
    })
  })
  chartService = inject(ChartService);
  snackBar = inject(MatSnackBar);



  setMonthAndYear(normalizedMonthAndYear: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrl = this.form.get('date');
    if (ctrl) {
      ctrl.setValue(moment(ctrl.value).month(normalizedMonthAndYear.month()).year(normalizedMonthAndYear.year()));
      datepicker.close();
    }
  }

  addData() {
    if (this.form.valid) {
      const { date, smsCount } = this.form.value;
      if (date && smsCount) {
        this.chartService.addSmsData(date.format('MM/YYYY'), smsCount);
      }
      this.snackBar.open('Dodano dane SMS 📈', 'Zamknij', {
        duration: 3000,
        panelClass: ['snackbar-success'],
      });
      this.clearForm();
    }
  }

  private clearForm(): void {
    this.form.reset({
      date: moment(),
      smsCount: null
    });

    this.form.markAsPristine();
    this.form.markAsUntouched();
    this.form.updateValueAndValidity();
    console.log('elo')
  }


}
