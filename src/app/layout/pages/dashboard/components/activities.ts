import { Component } from "@angular/core";
import { Card } from "primeng/card";
import { DividerModule } from "primeng/divider"

@Component({
    selector: "activities",
    template: `
    <p-card styleClass="border border-blue-600 shadow-sm" class="w-full h-full">
      <ng-template #header>
        <div class="flex items-center justify-between p-4 border-b border-gray-100 bg-gray-50">
          <div class="flex items-center gap-2">
            <i class="pi pi-history text-purple-500 text-lg"></i>
            <div class="flex flex-col">
              <span class="font-bold text-gray-800 text-base">Ultime Attività</span>
              <span class="text-xs text-gray-500">Cronologia delle transazioni recenti</span>
            </div>
          </div>
          <span class="text-xs text-gray-400 font-medium">Ultimi 30 giorni</span>
        </div>
      </ng-template>

      <div class="space-y-4 mt-2">
        <!-- Activity 1 -->
        <div class="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-full bg-green-50 text-green-600 flex items-center justify-center">
              <i class="pi pi-arrow-down-left text-xs"></i>
            </div>
            <div class="flex flex-col">
              <span class="text-sm font-semibold text-gray-800">Acquisto Bitcoin</span>
              <span class="text-xs text-gray-400">30/05/2026 • Eseguito</span>
            </div>
          </div>
          <div class="text-right">
            <span class="text-sm font-bold text-green-600">+€ 10.000,00</span>
            <span class="text-[10px] block text-gray-400">Quota: 0.33 BTC</span>
          </div>
        </div>

        <!-- Activity 2 -->
        <div class="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-full bg-red-50 text-red-600 flex items-center justify-center">
              <i class="pi pi-arrow-up-right text-xs"></i>
            </div>
            <div class="flex flex-col">
              <span class="text-sm font-semibold text-gray-800">Vendita Microsoft</span>
              <span class="text-xs text-gray-400">28/05/2026 • Eseguito</span>
            </div>
          </div>
          <div class="text-right">
            <span class="text-sm font-bold text-red-600">-€ 2.000,00</span>
            <span class="text-[10px] block text-gray-400">Quota: 5.2 azioni</span>
          </div>
        </div>

        <!-- Activity 3 -->
        <div class="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-full bg-green-50 text-green-600 flex items-center justify-center">
              <i class="pi pi-arrow-down-left text-xs"></i>
            </div>
            <div class="flex flex-col">
              <span class="text-sm font-semibold text-gray-800">Acquisto Amazon</span>
              <span class="text-xs text-gray-400">25/05/2026 • Eseguito</span>
            </div>
          </div>
          <div class="text-right">
            <span class="text-sm font-bold text-green-600">+€ 4.000,00</span>
            <span class="text-[10px] block text-gray-400">Quota: 22.4 azioni</span>
          </div>
        </div>

        <!-- Activity 4 -->
        <div class="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-full bg-red-50 text-red-600 flex items-center justify-center">
              <i class="pi pi-arrow-up-right text-xs"></i>
            </div>
            <div class="flex flex-col">
              <span class="text-sm font-semibold text-gray-800">Vendita Ethereum</span>
              <span class="text-xs text-gray-400">20/05/2026 • Eseguito</span>
            </div>
          </div>
          <div class="text-right">
            <span class="text-sm font-bold text-red-600">-€ 10.000,00</span>
            <span class="text-[10px] block text-gray-400">Quota: 3.12 ETH</span>
          </div>
        </div>

      </div>
    </p-card>
    `,
    imports: [Card,DividerModule]
})

export class Activities {}