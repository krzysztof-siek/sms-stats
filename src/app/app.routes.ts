import { Routes } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { FormComponent } from './form/form.component';

export const routes: Routes = [
  {
    path: 'chart',
    loadComponent: () => import('./chart/chart.component').then(m => m.ChartComponent)
  },
  {
    path: 'form',
    loadComponent: () => import('./form/form.component').then(m => m.FormComponent)
  },
  {
    path: '',
    redirectTo: 'chart',
    pathMatch: 'full'
  },
];

