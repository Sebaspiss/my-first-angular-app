import { Component } from "@angular/core";
import { Card } from "primeng/card";
import { DividerModule } from "primeng/divider"

@Component({
    selector: "portfolio",
    template: `
    <p-card styleClass="border border-blue-600 shadow-sm" class="w-full h-full">
      <ng-template #header>
        <div class="flex items-center justify-between p-4 border-b border-gray-100 bg-gray-50">
          <div class="flex items-center gap-2">
            <i class="pi pi-wallet text-green-500 text-lg"></i>
            <div class="flex flex-col">
              <span class="font-bold text-gray-800 text-base">Bilancio Portafoglio</span>
              <span class="text-xs text-gray-500">Asset allocation e controvalore totale</span>
            </div>
          </div>
          <span class="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">+1.85% oggi</span>
        </div>
      </ng-template>

      <div class="space-y-6 mt-2">
        <!-- Total Balance -->
        <div class="flex flex-col gap-0.5">
          <span class="text-xs text-gray-400 font-semibold uppercase tracking-wider">Valore Totale Stimato</span>
          <div class="flex items-baseline gap-2">
            <span class="text-2xl font-black text-gray-900">€ 46.000,00</span>
            <span class="text-xs font-semibold text-green-600">+€ 836,00</span>
          </div>
        </div>

        <p-divider class="block my-2"></p-divider>

        <!-- Assets List -->
        <div class="space-y-4">
          <!-- Bitcoin -->
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-xs">BTC</div>
              <div class="flex flex-col">
                <span class="text-sm font-semibold text-gray-800">Bitcoin</span>
                <span class="text-xs text-gray-400">Allocazione: 65.2%</span>
              </div>
            </div>
            <div class="text-right">
              <div class="text-sm font-bold text-gray-900">€ 30.000,00</div>
              <span class="text-[10px] text-green-600 font-medium">+2.4%</span>
            </div>
          </div>

          <!-- Ethereum -->
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-xs">ETH</div>
              <div class="flex flex-col">
                <span class="text-sm font-semibold text-gray-800">Ethereum</span>
                <span class="text-xs text-gray-400">Allocazione: 21.7%</span>
              </div>
            </div>
            <div class="text-right">
              <div class="text-sm font-bold text-gray-900">€ 10.000,00</div>
              <span class="text-[10px] text-green-600 font-medium">+1.1%</span>
            </div>
          </div>

          <!-- Amazon -->
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-xs">AMZN</div>
              <div class="flex flex-col">
                <span class="text-sm font-semibold text-gray-800">Amazon Inc.</span>
                <span class="text-xs text-gray-400">Allocazione: 8.7%</span>
              </div>
            </div>
            <div class="text-right">
              <div class="text-sm font-bold text-gray-900">€ 4.000,00</div>
              <span class="text-[10px] text-red-600 font-medium">-0.8%</span>
            </div>
          </div>

          <!-- Microsoft -->
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">MSFT</div>
              <div class="flex flex-col">
                <span class="text-sm font-semibold text-gray-800">Microsoft Corp.</span>
                <span class="text-xs text-gray-400">Allocazione: 4.4%</span>
              </div>
            </div>
            <div class="text-right">
              <div class="text-sm font-bold text-gray-900">€ 2.000,00</div>
              <span class="text-[10px] text-green-600 font-medium">+0.5%</span>
            </div>
          </div>

        </div>
      </div>
    </p-card>
    `,
    imports: [Card,DividerModule]
})

export class Portfolio {}