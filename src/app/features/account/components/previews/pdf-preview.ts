import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfPreviewData } from '../../models/document.model';

@Component({
  selector: 'doc-pdf-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'pdf-preview.html'
})
export class DocPdfPreview {
  @Input({ required: true }) data!: PdfPreviewData;
}
