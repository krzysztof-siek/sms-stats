import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LineChartComponent {
  @Input() data: Record<string, number> = {};
  public chartType: ChartType = 'line';

  get chartData(): ChartConfiguration<ChartType>['data'] {
    const labels = Object.keys(this.data).sort((a, b) => {
      const [ma, ya] = a.split('/').map(Number);
      const [mb, yb] = b.split('/').map(Number);
      return ya - yb || ma - mb;
    });

    return {
      labels,
      datasets: [
        {
          data: labels.map(label => this.data[label]),
          label: 'Wysłane SMS-y',
          fill: true,
          tension: 0.4,
          pointBackgroundColor: '#ff0000',
          pointBorderColor: '#000000',
          pointRadius: 5,
          pointHoverRadius: 7
        }
      ]
    };
  }

  chartOptions: ChartConfiguration<ChartType>['options'] = {
    responsive: true,
    scales: {
      x: {
        title: {display: true, text: 'Data'},
        grid: {display: false}
      },
      y: {
        beginAtZero: true,
        title: {display: true, text: 'Wartość'}
      }
    },
  };
}
