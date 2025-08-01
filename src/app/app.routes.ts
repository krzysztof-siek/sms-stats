import { Routes } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { FormComponent } from './form/form.component';

export const routes: Routes = [
  { path: 'chart', component: ChartComponent },
  { path: 'form', component: FormComponent },
  { path: '', redirectTo: 'chart', pathMatch: 'full' },
];

