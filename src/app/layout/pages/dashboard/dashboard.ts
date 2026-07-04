import { Component } from "@angular/core";
import { ChartLine } from "./components/chartLine";
import { Portfolio } from "./components/portfolio";
import { Activities } from "./components/activities";
import { News } from "./components/news";

@Component({
    selector: "page-dashboard",
    template: `
    <div class="space-y-6">
        <!-- Page Title Header -->
        <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                <i class="pi pi-home text-xl"></i>
            </div>
            <div>
                <h2 class="text-xl font-bold text-gray-900">Dashboard Trading</h2>
                <p class="text-sm text-gray-500">Panoramica del tuo portafoglio, andamento prezzi e ultime attività</p>
            </div>
        </div>

        <!-- Grid Layout -->
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <chartLine class="block w-full"></chartLine>
            <portfolio class="block w-full"></portfolio>
            <activities class="block w-full"></activities>
            <news class="block w-full"></news>
        </div>
    </div>
    `,
    imports: [ChartLine, Portfolio, Activities, News]
})

export class Dashboard {}