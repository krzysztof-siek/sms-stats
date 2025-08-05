import { ChartTypeEnum } from '../enums/chart-type-labels';

export type MonthYear = string;
export type SmsChartData = Record<MonthYear, number>;

export interface ChartTypeOption {
  value: ChartTypeEnum;
  label: string;
}
