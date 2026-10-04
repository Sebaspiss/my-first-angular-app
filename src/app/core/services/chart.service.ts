import { Injectable, signal } from '@angular/core';

export interface ChartSeriesData {
    id: string;
    label: string;
    data: number[];
}

export interface PortfolioChartData {
    labels: string[];
    datasets: ChartSeriesData[];
}

@Injectable({
    providedIn: 'root'
})
export class ChartService {
    chartData = signal<PortfolioChartData>({
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                id: 'first-dataset',
                label: 'First Dataset',
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                id: 'second-dataset',
                label: 'Second Dataset',
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    });
}
