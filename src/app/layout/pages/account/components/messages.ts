import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { BadgeModule } from 'primeng/badge';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'messages',
  standalone: true,
  imports: [CommonModule, CardModule, BadgeModule, DividerModule],
  template: `
    <div class="space-y-4">
      <p-card header="Messaggi">
        <div class="space-y-3">
          @for (msg of data; track msg.id) {
            <div 
              class="flex items-start justify-between p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition"
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
    </div>
  `
})

export class Messages {

  data = [
    {
      id: '1',
      title: 'Benvenuto!',
      preview: 'Grazie per esserti registrato alla piattaforma.',
      date: '30/05/2026',
      status: 'nuovo'
    },
    {
      id: '2',
      title: 'Aggiornamento sistema',
      preview: 'Abbiamo rilasciato nuove funzionalità.',
      date: '28/05/2026',
      status: 'letto'
    },
    {
      id: '3',
      title: 'Promemoria',
      preview: 'Ricordati di completare il tuo profilo.',
      date: '25/05/2026',
      status: 'letto'
    }
  ];
}