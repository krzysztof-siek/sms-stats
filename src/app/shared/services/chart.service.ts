import { Injectable } from '@angular/core';
import {SmsChartData} from '../types/chat-data';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  chartData: SmsChartData = {
    '01/2025': 120,
    '02/2025': 180,
    '03/2025': 90,
    '04/2025': 100,
  };

  addSmsData(date: string, count: number): void {
    if (this.chartData[date]) {
      this.chartData[date] += count;
    } else {
      this.chartData[date] = count;
    }
  }

}
