import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExcelPreviewData } from '../../models/document.model';

@Component({
  selector: 'doc-excel-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'excel-preview.html'
})
export class DocExcelPreview {
  @Input({ required: true }) data!: ExcelPreviewData;

  formatCurrency(value: number): string {
    return `€ ${value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }
}
