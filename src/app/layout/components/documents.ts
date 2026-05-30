import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'documents',
  standalone: true,
  imports: [CommonModule, CardModule, CheckboxModule, ButtonModule, DividerModule, FormsModule],
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
              class="flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition"
            >

              <div class="flex items-center gap-3">
                <p-checkbox
                  [(ngModel)]="doc.selected"
                  [binary]="true">
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

              <span class="text-xs text-gray-500">
                {{ doc.date }}
              </span>

            </div>
          }

        </div>

        <p-divider></p-divider>

        <div class="flex justify-between items-center text-sm text-gray-600">
          <div>
            Selezionati: {{ selectedCount }}
          </div>

          <button
            pButton
            label="Elabora"
            icon="pi pi-check"
            [disabled]="selectedCount === 0"
            class="p-button-sm p-button-success">
          </button>
        </div>

      </p-card>

    </div>
  `
})
export class Documents {

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
}