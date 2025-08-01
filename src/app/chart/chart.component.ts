import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartService } from '../shared/services/chart.service';
import {LineChartComponent} from '../shared/components/line-chart/line-chart.component';


@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule, LineChartComponent],
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {
  constructor(public chartService: ChartService) {}
}
