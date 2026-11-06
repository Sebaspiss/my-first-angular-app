import { Component, input } from '@angular/core';
import { PdfPreviewData } from '../../models/document.model';

@Component({
  selector: 'doc-pdf-preview',
  imports: [],
  templateUrl: 'pdf-preview.html'
})
export class DocPdfPreview {
  readonly data = input.required<PdfPreviewData>();
}
