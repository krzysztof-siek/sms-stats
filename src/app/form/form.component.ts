import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { ChartService } from '../shared/services/chart.service';
import { provideMomentDateAdapter } from '@angular/material-moment-adapter';
import { default as _rollupMoment, Moment } from 'moment';
import * as _moment from 'moment';
import { MatSnackBar } from '@angular/material/snack-bar';
const moment = _rollupMoment || _moment;
import { CustomErrorStateMatcher } from '../shared/utils/error-state-matcher';
import { monthYearFormatValidator, positiveIntegerValidator } from '../shared/utils/validators';
import { MONTH_YEAR_DATE_FORMATS } from '../shared/utils/date-formats';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    CommonModule,
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
    provideMomentDateAdapter(MONTH_YEAR_DATE_FORMATS),
  ]
})
export class FormComponent {
  readonly matcher = new CustomErrorStateMatcher();
  readonly chartService = inject(ChartService);
  readonly snackBar = inject(MatSnackBar);

  get dateControl() {
    return this.form.get('date');
  }

  get smsCountControl() {
    return this.form.get('smsCount');
  }

  private getInitialDate(): Moment {
    return moment();
  }

  readonly form = new FormGroup({
    date: new FormControl<Moment | null>(this.getInitialDate(), [
      Validators.required,
      monthYearFormatValidator]
    ),
    smsCount: new FormControl<number | null>(null, {
      validators: [Validators.required, Validators.min(1), positiveIntegerValidator],
    })
  })


  setMonthAndYear(monthYear: Moment, datepicker: MatDatepicker<Moment>): void {
    const control = this.form.get('date');
    const value = control?.value;

    if (!control || !moment.isMoment(value) || !value.isValid()) return;

    const updated = value.clone().month(monthYear.month()).year(monthYear.year());
    control.setValue(updated);
    datepicker.close();
  }

  onSubmit() {
    const {date, smsCount} = this.form.value;
    if (this.form.invalid || !moment.isMoment(date) || !date.isValid() || !smsCount) {
      return;
    }

    this.chartService.addSmsData(date.format('MM/YYYY'), smsCount);
    this.snackBar.open('Dodano dane SMS 📈', 'Zamknij', {
      duration: 3000,
      panelClass: ['snackbar-success'],
    });
    this.clearForm();
  }

  private clearForm(): void {
    this.form.reset({
      date: this.getInitialDate(),
      smsCount: null
    });
    this.form.markAsPristine();
    this.form.markAsUntouched();
  }

}
