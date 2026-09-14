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
  templateUrl: './documents.html'
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

  openDocument(doc: any) {
    this.selectedDocument = doc;
  }

  closeDocument() {
    this.selectedDocument = null;
  }
}