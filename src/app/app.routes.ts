import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'chart',
    pathMatch: 'full'
  },
  {
    path: 'chart',
    loadComponent: () => import('./chart/chart.component').then(m => m.ChartComponent)
  },
  {
    path: 'form',
    loadComponent: () => import('./form/form.component').then(m => m.FormComponent)
  },
  {
    path: '**',
    redirectTo: 'chart',
  },
];

