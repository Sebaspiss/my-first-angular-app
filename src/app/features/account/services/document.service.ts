import { Injectable, signal } from '@angular/core';
import { 
  DocumentItem, 
  PdfPreviewData, 
  ExcelPreviewData, 
  ImagePreviewData 
} from '../models/document.model';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  documents = signal<DocumentItem[]>([
    {
      id: 1,
      name: 'Contract.pdf',
      type: 'PDF',
      size: '2.1 MB',
      date: '05/28/2026',
      selected: false
    },
    {
      id: 2,
      name: 'Invoice_2024.xlsx',
      type: 'Excel',
      size: '1.2 MB',
      date: '05/25/2026',
      selected: false
    },
    {
      id: 3,
      name: 'Identity_Document.jpg',
      type: 'Image',
      size: '3.4 MB',
      date: '05/20/2026',
      selected: false
    }
  ]);

  get selectedCount(): number {
    return this.documents().filter(d => d.selected).length;
  }

  // Mock data for previews
  private pdfPreviewData: PdfPreviewData = {
    title: 'Service Agreement',
    company: 'Fintech Company Inc.',
    signer: 'John Doe',
    articles: [
      {
        title: 'Art. 1 - Subject Matter',
        content: 'This Agreement governs the provision of fintech financial intermediation and digital portfolio management services provided by Fintech Company to the User.'
      },
      {
        title: 'Art. 2 - Financial Terms',
        content: 'Transaction fees and account maintenance costs are specified in the attached Information Sheet and accepted by the User upon account activation.'
      },
      {
        title: 'Art. 3 - Term and Termination',
        content: 'This Agreement is concluded for an indefinite term. Either party may terminate at any time by written notice or via the platform with 30 days prior notice.'
      }
    ]
  };

  private excelPreviewData: ExcelPreviewData = {
    items: [
      {
        code: 'FT-9921',
        description: 'Financial Advisory Services - May 2026',
        quantity: 1,
        unitPrice: 850.00,
        total: 850.00
      },
      {
        code: 'FT-8210',
        description: 'Trading API Platform Subscription Fee',
        quantity: 12,
        unitPrice: 12.50,
        total: 150.00
      }
    ],
    subtotal: 1000.00,
    vatRate: 22,
    vatAmount: 220.00,
    total: 1220.00
  };

  private imagePreviewData: ImagePreviewData = {
    title: 'Identity Card',
    subtitle: 'Electronic Identity Card',
    lastName: 'Doe',
    firstName: 'John',
    birthDate: '08/15/1990',
    notes: 'Valid identity document.'
  };

  getPdfPreview(_id?: number): PdfPreviewData {
    return this.pdfPreviewData;
  }

  getExcelPreview(_id?: number): ExcelPreviewData {
    return this.excelPreviewData;
  }

  getImagePreview(_id?: number): ImagePreviewData {
    return this.imagePreviewData;
  }

  toggleSelect(doc: DocumentItem): void {
    doc.selected = !doc.selected;
  }

  selectAll(): void {
    const allSelected = this.documents().every(d => d.selected);
    this.documents().forEach(d => (d.selected = !allSelected));
  }

  downloadDocument(doc: DocumentItem): void {
    console.log(`Download started for: ${doc.name} (${doc.type}, ${doc.size})`);
  }
}
