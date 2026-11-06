import { Component, OnInit, inject } from "@angular/core";
import { UIChart } from 'primeng/chart';
import { Card } from "primeng/card";
import { ChartLineService } from "../services/chart-line.service";
import { ChartPeriod } from "../models/chart-line.model";

@Component({
  selector: "chart-line",
  templateUrl: "./chart-line.html",
  imports: [UIChart, Card]
})
export class ChartLine implements OnInit {
  protected chartService = inject(ChartLineService);

  data: any;
  options: any;

  get selectedPeriod(): ChartPeriod {
    return this.chartService.selectedPeriod();
  }

  ngOnInit() {
    this.initChart();
  }

  initChart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--p-text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
    const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

    this.options = {
      responsive: true,
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        y: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }
      }
    };

    this.updateChartData();
  }

  selectPeriod(period: ChartPeriod): void {
    this.chartService.setPeriod(period);
    this.updateChartData();
  }

  updateChartData(): void {
    const documentStyle = getComputedStyle(document.documentElement);
    const seriesColors: Record<string, string> = {
      'first-dataset': documentStyle.getPropertyValue('--p-cyan-500'),
      'second-dataset': documentStyle.getPropertyValue('--p-gray-500')
    };

    const defaultColor = documentStyle.getPropertyValue('--p-cyan-500');
    const chartData = this.chartService.chartData();

    this.data = {
      labels: chartData.labels,
      datasets: chartData.datasets.map(ds => ({
        label: ds.label,
        data: ds.data,
        fill: false,
        borderColor: seriesColors[ds.id] ?? defaultColor,
        tension: 0.4
      }))
    };
  }
}