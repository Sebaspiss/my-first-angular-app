import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { BadgeModule } from 'primeng/badge';
import { DividerModule } from 'primeng/divider';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'messages',
  standalone: true,
  imports: [CommonModule, CardModule, BadgeModule, DividerModule, DialogModule, ButtonModule],
  template: `
    <div class="space-y-4">
      <p-card header="Messaggi">
        <div class="space-y-3">
          @for (msg of data; track msg.id) {
            <div 
              class="flex items-start justify-between p-3 rounded-lg border border-gray-200 hover:bg-gray-50 hover:border-blue-300 transition cursor-pointer"
              (click)="openMessage(msg)"
            >
              <div class="flex flex-col gap-1">
                <div class="font-semibold text-gray-800">
                  {{ msg.title }}
                </div>
                <div class="text-sm text-gray-500">
                  {{ msg.preview }}
                </div>
                <div class="text-xs text-gray-400">
                  {{ msg.date }}
                </div>
              </div>

              <p-badge 
                [value]="msg.status"
                [severity]="msg.status === 'nuovo' ? 'danger' : 'success'">
              </p-badge>
            </div>
          }
          
        </div>
        <p-divider></p-divider>

        <div class="text-right text-sm text-gray-500">
          Totale messaggi: {{ data.length }}
        </div>
      </p-card>

      <!-- Native PrimeNG Dialog instead of Custom Modal -->
      <p-dialog 
        header="Dettaglio Messaggio" 
        [visible]="selectedMessage !== null" 
        (visibleChange)="closeModal()" 
        [modal]="true" 
        [style]="{ width: '450px' }"
        [draggable]="false"
        [resizable]="false">
        
        @if (selectedMessage) {
          <div class="space-y-4 pt-3">
            <!-- Title Section -->
            <div>
              <label class="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">Titolo</label>
              <div class="text-base font-bold text-gray-800">
                {{ selectedMessage.title }}
              </div>
            </div>

            <p-divider></p-divider>

            <!-- Text Content Section -->
            <div>
              <label class="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">Contenuto</label>
              <p class="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                {{ selectedMessage.preview }}
              </p>
            </div>

            <p-divider></p-divider>

            <!-- Date and Status Section -->
            <div class="flex justify-between items-center text-xs">
              <div>
                <label class="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">Data Ricezione</label>
                <span class="text-gray-500 font-medium">{{ selectedMessage.date }}</span>
              </div>
              <div class="text-right">
                <label class="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">Stato</label>
                <span 
                  class="px-2 py-0.5 rounded-full font-bold text-[9px] uppercase"
                  [class.bg-red-100]="selectedMessage.status === 'nuovo'"
                  [class.text-red-700]="selectedMessage.status === 'nuovo'"
                  [class.bg-green-100]="selectedMessage.status === 'letto'"
                  [class.text-green-700]="selectedMessage.status === 'letto'">
                  {{ selectedMessage.status }}
                </span>
              </div>
            </div>
          </div>
        }

        <ng-template #footer>
          <div class="flex justify-end pt-2">
            <button 
              pButton
              label="Chiudi"
              icon="pi pi-times"
              (click)="closeModal()" 
              class="p-button-sm cursor-pointer">
            </button>
          </div>
        </ng-template>
      </p-dialog>
    </div>
  `
})
export class Messages {
  selectedMessage: any = null;

  data = [
    {
      id: '1',
      title: 'Benvenuto!',
      preview: 'Grazie per esserti registrato alla piattaforma di trading fintech. Siamo entusiasti di averti a bordo.\n\nEsplora la tua dashboard per iniziare ad analizzare il mercato in tempo reale.',
      date: '30/05/2026',
      status: 'nuovo'
    },
    {
      id: '2',
      title: 'Aggiornamento sistema',
      preview: 'Abbiamo rilasciato nuove funzionalità per migliorare la sicurezza e la velocità delle transazioni.\n\nControlla le impostazioni per gestire le notifiche personalizzate.',
      date: '28/05/2026',
      status: 'letto'
    },
    {
      id: '3',
      title: 'Promemoria',
      preview: 'Ricordati di completare il caricamento del tuo documento d\'identità nella sezione anagrafica per sbloccare tutti i limiti operativi dell\'account.',
      date: '25/05/2026',
      status: 'letto'
    }
  ];

  openMessage(msg: any) {
    this.selectedMessage = msg;
    if (msg.status === 'nuovo') {
      msg.status = 'letto';
    }
  }

  closeModal() {
    this.selectedMessage = null;
  }
}