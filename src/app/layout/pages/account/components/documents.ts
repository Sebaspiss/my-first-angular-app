import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'documents',
  standalone: true,
  imports: [CommonModule, CardModule, CheckboxModule, ButtonModule, DividerModule, FormsModule, DialogModule],
  template: `
    <div class="space-y-4">
      <p-card header="Selezione Documenti">
        <div class="flex justify-between items-center mb-3">
          <div class="text-sm text-gray-500">
            Seleziona i documenti da inviare o gestire
          </div>

          <button
            pButton
            label="Seleziona tutti"
            class="p-button-sm"
            (click)="selectAll()">
          </button>
        </div>

        <div class="space-y-2">

          @for (doc of data; track doc.id) {
            <div
              class="flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:bg-gray-50 hover:border-blue-300 transition cursor-pointer"
              (click)="doc.selected = !doc.selected"
            >

              <div class="flex items-center gap-3">
                <p-checkbox
                  [(ngModel)]="doc.selected"
                  [binary]="true"
                  (click)="$event.stopPropagation()">
                </p-checkbox>

                <div class="flex flex-col">
                  <div class="font-medium text-gray-800">
                    {{ doc.name }}
                  </div>
                  <div class="text-xs text-gray-400">
                    {{ doc.type }} • {{ doc.size }}
                  </div>
                </div>
              </div>

              <div class="flex items-center gap-4">
                <span class="text-xs text-gray-500 hidden sm:inline">
                  {{ doc.date }}
                </span>
                <button 
                  pButton 
                  icon="pi pi-eye" 
                  label="Apri" 
                  class="p-button-outlined p-button-sm cursor-pointer"
                  (click)="openDocument(doc); $event.stopPropagation()">
                </button>
              </div>

            </div>
          }

        </div>

        <p-divider></p-divider>

        <div class="flex justify-between items-center text-sm text-gray-600">
          <div>
            Selezionati: {{ selectedCount }}
          </div>
        </div>

      </p-card>

      <!-- Native PrimeNG Dialog Document Viewer -->
      <p-dialog 
        [header]="selectedDocument ? selectedDocument.name : ''" 
        [visible]="selectedDocument !== null" 
        (visibleChange)="closeDocument()" 
        [modal]="true" 
        [style]="{ width: '700px', maxHeight: '90vh' }"
        [draggable]="false"
        [resizable]="false">
        
        @if (selectedDocument) {
          <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-center min-h-[350px]">
            <!-- PDF Type -->
            @if (selectedDocument.type === 'PDF') {
              <div class="bg-white dark:bg-gray-900 p-8 w-full max-w-xl shadow-md rounded border border-gray-200 dark:border-gray-700 min-h-[300px] flex flex-col justify-between text-gray-800 dark:text-gray-200">
                <div>
                  <div class="text-center font-bold text-lg mb-6 uppercase tracking-wider text-gray-800 dark:text-gray-100">Contratto di Servizio</div>
                  <div class="space-y-4 text-[11px] leading-relaxed text-justify text-gray-600 dark:text-gray-400">
                    <p class="font-semibold text-gray-700 dark:text-gray-300">Art. 1 - Oggetto del Contratto</p>
                    <p>Il presente accordo disciplina la fornitura dei servizi fintech di intermediazione finanziaria e di gestione del portafoglio digitale da parte di Fintech Company all'Utente.</p>
                    <p class="font-semibold text-gray-700 dark:text-gray-300">Art. 2 - Condizioni Finanziarie</p>
                    <p>Le commissioni per le transazioni e i costi di tenuta conto sono indicati nel Foglio Informativo allegato e accettati dall'Utente al momento dell'attivazione dell'account.</p>
                    <p class="font-semibold text-gray-700 dark:text-gray-300">Art. 3 - Durata e Recesso</p>
                    <p>Il presente contratto è a tempo indeterminato. Entrambe le parti possono recedere in qualsiasi momento mediante comunicazione scritta o tramite la piattaforma con preavviso di 30 giorni.</p>
                  </div>
                </div>
                <div class="flex justify-between items-end border-t border-gray-100 dark:border-gray-800 pt-4 mt-8">
                  <div class="text-[9px] text-gray-400">Fintech Company S.p.A.</div>
                  <div class="text-right">
                    <span class="text-[8px] block text-gray-400 italic">Firma Digitale Apposta</span>
                    <span class="text-xs font-semibold text-gray-700 dark:text-gray-300">Mario Rossi</span>
                  </div>
                </div>
              </div>
            }

            <!-- Excel Type -->
            @if (selectedDocument.type === 'Excel') {
              <div class="bg-white dark:bg-gray-900 p-4 w-full shadow-md rounded border border-gray-200 dark:border-gray-700 overflow-x-auto">
                <table class="w-full text-left border-collapse text-[11px]">
                  <thead>
                    <tr class="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                      <th class="p-2 border-r border-gray-200 dark:border-gray-700">Codice Articolo</th>
                      <th class="p-2 border-r border-gray-200 dark:border-gray-700">Descrizione</th>
                      <th class="p-2 border-r border-gray-200 dark:border-gray-700 text-right">Quantità</th>
                      <th class="p-2 border-r border-gray-200 dark:border-gray-700 text-right">Prezzo Unitario</th>
                      <th class="p-2 text-right">Totale Imponibile</th>
                    </tr>
                  </thead>
                  <tbody class="text-gray-600 dark:text-gray-400">
                    <tr class="border-b border-gray-100 dark:border-gray-800">
                      <td class="p-2 border-r border-gray-200 dark:border-gray-700 font-mono">FT-9921</td>
                      <td class="p-2 border-r border-gray-200 dark:border-gray-700">Servizi di Consulenza Finanziaria - Maggio 2026</td>
                      <td class="p-2 border-r border-gray-200 dark:border-gray-700 text-right">1</td>
                      <td class="p-2 border-r border-gray-200 dark:border-gray-700 text-right">€ 850,00</td>
                      <td class="p-2 text-right">€ 850,00</td>
                    </tr>
                    <tr class="border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-950/20">
                      <td class="p-2 border-r border-gray-200 dark:border-gray-700 font-mono">FT-8210</td>
                      <td class="p-2 border-r border-gray-200 dark:border-gray-700">Gestione canone piattaforma API trading</td>
                      <td class="p-2 border-r border-gray-200 dark:border-gray-700 text-right">12</td>
                      <td class="p-2 border-r border-gray-200 dark:border-gray-700 text-right">€ 12,50</td>
                      <td class="p-2 text-right">€ 150,00</td>
                    </tr>
                    <tr class="font-semibold text-gray-800 dark:text-gray-200 border-t-2 border-gray-200 dark:border-gray-700">
                      <td colspan="3" class="p-2 text-right">Totale Parziale</td>
                      <td class="p-2 border-r border-gray-200 dark:border-gray-700 text-right"></td>
                      <td class="p-2 text-right">€ 1.000,00</td>
                    </tr>
                    <tr class="font-semibold text-gray-800 dark:text-gray-200">
                      <td colspan="3" class="p-2 text-right">IVA (22%)</td>
                      <td class="p-2 border-r border-gray-200 dark:border-gray-700 text-right"></td>
                      <td class="p-2 text-right">€ 220,00</td>
                    </tr>
                    <tr class="font-bold text-gray-900 dark:text-white bg-blue-50/50 dark:bg-blue-950/20 border-t border-blue-100 dark:border-blue-900">
                      <td colspan="3" class="p-2 text-right text-blue-700 dark:text-blue-400">Totale Fattura</td>
                      <td class="p-2 border-r border-gray-200 dark:border-gray-700 text-right"></td>
                      <td class="p-2 text-right text-blue-700 dark:text-blue-400">€ 1.220,00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            }

            <!-- Image Type -->
            @if (selectedDocument.type === 'Image') {
              <div class="bg-white dark:bg-gray-900 p-6 shadow-md rounded border border-gray-200 dark:border-gray-700 max-w-sm w-full text-center space-y-4">
                <div class="text-xs text-gray-400 dark:text-gray-500 uppercase font-semibold tracking-wider">Anteprima File Caricato</div>
                <div class="w-full h-44 bg-gradient-to-tr from-blue-400 to-indigo-600 rounded-lg flex flex-col items-center justify-center text-white p-4 relative overflow-hidden">
                  <div class="absolute top-2 left-2 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm"></div>
                  <div class="text-sm font-bold tracking-widest uppercase mb-1">Repubblica Italiana</div>
                  <div class="text-[10px] opacity-80 mb-6">Carta d'Identità Elettronica</div>
                  <div class="flex items-center gap-3 w-full border-t border-white/20 pt-3">
                    <div class="w-10 h-10 rounded bg-white/30 backdrop-blur-sm flex-shrink-0"></div>
                    <div class="text-left leading-none space-y-1">
                      <span class="text-[9px] block opacity-75">Cognome: Rossi</span>
                      <span class="text-[9px] block opacity-75">Nome: Mario</span>
                      <span class="text-[9px] block opacity-75">Nato il: 15/08/1990</span>
                    </div>
                  </div>
                </div>
                <div class="text-xs text-gray-500 dark:text-gray-400">Documento d'identità in corso di validità.</div>
              </div>
            }
          </div>
        }

        <ng-template #footer>
          <div class="flex justify-between items-center w-full pt-2">
            <button 
              pButton 
              icon="pi pi-download" 
              label="Scarica" 
              class="p-button-outlined p-button-sm cursor-pointer">
            </button>
            <button 
              pButton
              label="Chiudi"
              icon="pi pi-times"
              (click)="closeDocument()" 
              class="p-button-sm cursor-pointer">
            </button>
          </div>
        </ng-template>
      </p-dialog>
    </div>
  `
})
export class Documents {
  selectedDocument: any = null;

  data = [
    {
      id: 1,
      name: 'Contratto.pdf',
      type: 'PDF',
      size: '2.1 MB',
      date: '28/05/2026',
      selected: false
    },
    {
      id: 2,
      name: 'Fattura_2024.xlsx',
      type: 'Excel',
      size: '1.2 MB',
      date: '25/05/2026',
      selected: false
    },
    {
      id: 3,
      name: 'Documento_identità.jpg',
      type: 'Image',
      size: '3.4 MB',
      date: '20/05/2026',
      selected: false
    }
  ];

  get selectedCount(): number {
    return this.data.filter(d => d.selected).length;
  }

  selectAll() {
    const allSelected = this.data.every(d => d.selected);
    this.data.forEach(d => d.selected = !allSelected);
  }

  getDocumentIcon(type: string): string {
    switch (type) {
      case 'PDF':
        return 'pi pi-file-pdf';
      case 'Excel':
        return 'pi pi-file-excel';
      case 'Image':
        return 'pi pi-image';
      default:
        return 'pi pi-file';
    }
  }

  openDocument(doc: any) {
    this.selectedDocument = doc;
  }

  closeDocument() {
    this.selectedDocument = null;
  }
}