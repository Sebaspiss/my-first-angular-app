import { Component, OnInit, inject } from "@angular/core";
import { ChartModule } from 'primeng/chart';
import { Card } from "primeng/card";

@Component ({
    selector: "chartLine",
    template: `
    <p-card styleClass="border border-blue-600 shadow-sm" class="w-full h-full">
      <ng-template #header>
        <div class="flex items-center justify-between p-4 border-b border-gray-100 bg-gray-50">
          <div class="flex items-center gap-2">
            <i class="pi pi-chart-line text-blue-500 text-lg"></i>
            <div class="flex flex-col">
              <span class="font-bold text-gray-800 text-base">Andamento Prezzi</span>
              <span class="text-xs text-gray-500">Quotazioni storiche degli asset in portafoglio</span>
            </div>
          </div>
          <!-- Time period selection buttons -->
          <div class="flex bg-gray-200/60 p-0.5 rounded-lg text-xs font-semibold text-gray-600">
            <span class="px-2 py-1 bg-white text-blue-600 rounded-md shadow-sm">1M</span>
            <span class="px-2 py-1 cursor-pointer hover:text-gray-900 transition ml-1">6M</span>
            <span class="px-2 py-1 cursor-pointer hover:text-gray-900 transition ml-1">1A</span>
          </div>
        </div>
      </ng-template>
      
      <div class="pt-2 h-[260px]">
        <p-chart type="line" [data]="data" [options]="options" class="h-full block" />
      </div>
    </p-card>
    `,
    imports: [ChartModule, Card]
})

export class ChartLine implements OnInit {
    data: any;
    options: any;

    ngOnInit() {
        this.initChart();
    }

    initChart() {
        // TODO: Get real data
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--p-text-color');
            const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
            const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');
        
            this.data = {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'First Dataset',
                        data: [65, 59, 80, 81, 56, 55, 40],
                        fill: false,
                        borderColor: documentStyle.getPropertyValue('--p-cyan-500'),
                        tension: 0.4
                    },
                    {
                        label: 'Second Dataset',
                        data: [28, 48, 40, 19, 86, 27, 90],
                        fill: false,
                        borderColor: documentStyle.getPropertyValue('--p-gray-500'),
                        tension: 0.4
                    }
                ]
            };
        
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
        }
}