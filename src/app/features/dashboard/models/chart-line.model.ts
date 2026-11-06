export type ChartPeriod = '1M' | '6M' | '1Y';

export interface ChartSeriesData {
  id: string;
  label: string;
  data: number[];
}

export interface PortfolioChartData {
  labels: string[];
  datasets: ChartSeriesData[];
}
