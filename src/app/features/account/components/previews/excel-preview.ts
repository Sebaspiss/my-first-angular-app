import { Component, input } from '@angular/core';
import { ExcelPreviewData } from '../../models/document.model';

@Component({
  selector: 'doc-excel-preview',
  imports: [],
  templateUrl: 'excel-preview.html'
})
export class DocExcelPreview {
  readonly data = input.required<ExcelPreviewData>();

  formatCurrency(value: number): string {
    return `€ ${value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }
}
