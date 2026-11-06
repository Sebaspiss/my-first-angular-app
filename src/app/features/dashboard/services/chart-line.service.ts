import { Injectable, computed, signal } from '@angular/core';
import { ChartPeriod, PortfolioChartData } from '../models/chart-line.model';

@Injectable({
  providedIn: 'root'
})
export class ChartLineService {
  selectedPeriod = signal<ChartPeriod>('1M');

  private readonly periodData: Record<ChartPeriod, PortfolioChartData> = {
    '1M': {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      datasets: [
        {
          id: 'first-dataset',
          label: 'First Dataset',
          data: [68, 74, 71, 85]
        },
        {
          id: 'second-dataset',
          label: 'Second Dataset',
          data: [35, 42, 39, 48]
        }
      ]
    },
    '6M': {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          id: 'first-dataset',
          label: 'First Dataset',
          data: [58, 62, 65, 70, 68, 85]
        },
        {
          id: 'second-dataset',
          label: 'Second Dataset',
          data: [30, 36, 42, 45, 41, 52]
        }
      ]
    },
    '1Y': {
      labels: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ],
      datasets: [
        {
          id: 'first-dataset',
          label: 'First Dataset',
          data: [45, 52, 58, 62, 65, 70, 68, 74, 79, 76, 82, 88]
        },
        {
          id: 'second-dataset',
          label: 'Second Dataset',
          data: [22, 26, 30, 36, 42, 45, 41, 46, 50, 48, 53, 58]
        }
      ]
    }
  };

  chartData = computed<PortfolioChartData>(() => {
    return this.getChartData(this.selectedPeriod());
  });

  setPeriod(period: ChartPeriod): void {
    this.selectedPeriod.set(period);
  }

  getChartData(period: ChartPeriod): PortfolioChartData {
    return this.periodData[period];
  }
}
