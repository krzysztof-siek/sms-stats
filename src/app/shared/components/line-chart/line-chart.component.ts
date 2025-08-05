import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartConfiguration } from 'chart.js';
import {BaseChartDirective} from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent {
  @Input() data: { [month: string]: number } = {};

  public chartType: ChartType = 'line';

  get chartData(): ChartConfiguration<ChartType>['data'] {
    return {
      labels: Object.keys(this.data),
      datasets: [
        {
          data: Object.values(this.data),
          label: 'Wysłane SMS-y',
          fill: true,
          tension: 0.4
        }
      ]
    };
  }

  chartOptions: ChartConfiguration<ChartType>['options'] = {
    responsive: true,
  };
}
