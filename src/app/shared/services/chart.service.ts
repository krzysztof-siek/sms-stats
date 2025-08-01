import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor() { }

  chartData: { [month: string]: number } = {
    '2025-01': 120,
    '2025-02': 180,
    '2025-03': 90,
    '2025-04': 10,
  };

  addSmsData(month: string, count: number): void {
    if (this.chartData[month]) {
      this.chartData[month] += count;
    } else {
      this.chartData[month] = count;
    }
  }

}
