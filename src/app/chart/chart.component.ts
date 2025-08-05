import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartService } from '../shared/services/chart.service';
import { LineChartComponent } from '../shared/components/line-chart/line-chart.component';
import { ChartType } from 'chart.js';
import { FormsModule } from '@angular/forms';
import { ChartTypeOption } from '../shared/types/chat-data';
import { ChartTypeEnum, chartTypeLabels } from '../shared/enums/chart-type-labels';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [
    CommonModule,
    LineChartComponent,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,],
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartComponent {
  readonly chartService = inject(ChartService);
  readonly chartData = this.chartService.chartData;
  chartType: ChartType = ChartTypeEnum.Line;

  chartTypesOptions: ChartTypeOption[] = Object.entries(chartTypeLabels).map(
    ([value, label]) => ({ value: value as ChartTypeEnum, label })
  );

}
