import { Component } from "@angular/core";
import { Card } from "primeng/card";
import { DividerModule } from "primeng/divider"

@Component({
    selector: "news",
    template: `
    <p-card styleClass="border border-blue-600 shadow-sm" class="w-full h-full">
      <ng-template #header>
        <div class="flex items-center justify-between p-4 border-b border-gray-100 bg-gray-50">
          <div class="flex items-center gap-2">
            <i class="pi pi-bookmark text-amber-500 text-lg"></i>
            <div class="flex flex-col">
              <span class="font-bold text-gray-800 text-base">Notizie di Mercato</span>
              <span class="text-xs text-gray-500">Aggiornamenti finanziari e promozioni</span>
            </div>
          </div>
          <span class="text-xs text-blue-600 font-semibold cursor-pointer hover:underline">Vedi tutto</span>
        </div>
      </ng-template>

      <div class="space-y-4 mt-2">
        <!-- News 1 -->
        <div class="flex flex-col gap-1 p-2 hover:bg-gray-50 rounded-lg transition cursor-pointer">
          <div class="flex items-center justify-between">
            <span class="text-[10px] uppercase font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Promo</span>
            <span class="text-xs text-gray-400">10/06/2026</span>
          </div>
          <span class="text-sm font-semibold text-gray-800 leading-tight font-semibold">Sconto -10% sulle commissioni di trading</span>
          <span class="text-xs text-gray-500 line-clamp-1">Attivo automaticamente sul tuo conto per tutte le operazioni da oggi.</span>
        </div>

        <!-- News 2 -->
        <div class="flex flex-col gap-1 p-2 hover:bg-gray-50 rounded-lg transition cursor-pointer">
          <div class="flex items-center justify-between">
            <span class="text-[10px] uppercase font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded">Prodotto</span>
            <span class="text-xs text-gray-400">05/01/2026</span>
          </div>
          <span class="text-sm font-semibold text-gray-800 leading-tight font-semibold">Rilasciato il nuovo ETF All-World</span>
          <span class="text-xs text-gray-500 line-clamp-1">Diversificazione globale ad accumulazione fisica con TER annuo ridotto.</span>
        </div>

        <!-- News 3 -->
        <div class="flex flex-col gap-1 p-2 hover:bg-gray-50 rounded-lg transition cursor-pointer">
          <div class="flex items-center justify-between">
            <span class="text-[10px] uppercase font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded">Commodity</span>
            <span class="text-xs text-gray-400">02/03/2026</span>
          </div>
          <span class="text-sm font-semibold text-gray-800 leading-tight font-semibold">Prezzi del Petrolio in rialzo del +2.6%</span>
          <span class="text-xs text-gray-500 line-clamp-1">Fattori geopolitici spingono al rialzo le quotazioni del greggio WTI.</span>
        </div>

        <!-- News 4 -->
        <div class="flex flex-col gap-1 p-2 hover:bg-gray-50 rounded-lg transition cursor-pointer">
          <div class="flex items-center justify-between">
            <span class="text-[10px] uppercase font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded">Tech</span>
            <span class="text-xs text-gray-400">18/01/2026</span>
          </div>
          <span class="text-sm font-semibold text-gray-800 leading-tight font-semibold">Il NASDAQ segna un +12% in 18 mesi</span>
          <span class="text-xs text-gray-500 line-clamp-1">Forte rally guidato dai giganti tecnologici e dall'espansione dei servizi AI.</span>
        </div>

      </div>
    </p-card>
    `,
    imports: [Card,DividerModule]
})

export class News {}