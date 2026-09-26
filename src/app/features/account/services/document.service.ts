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
  ]);

  get selectedCount(): number {
    return this.documents().filter(d => d.selected).length;
  }

  // Mock data per le anteprime
  private pdfPreviewData: PdfPreviewData = {
    title: 'Contratto di Servizio',
    company: 'Fintech Company S.p.A.',
    signer: 'Mario Rossi',
    articles: [
      {
        title: 'Art. 1 - Oggetto del Contratto',
        content: "Il presente accordo disciplina la fornitura dei servizi fintech di intermediazione finanziaria e di gestione del portafoglio digitale da parte di Fintech Company all'Utente."
      },
      {
        title: 'Art. 2 - Condizioni Finanziarie',
        content: "Le commissioni per le transazioni e i costi di tenuta conto sono indicati nel Foglio Informativo allegato e accettati dall'Utente al momento dell'attivazione dell'account."
      },
      {
        title: 'Art. 3 - Durata e Recesso',
        content: "Il presente contratto è a tempo indeterminato. Entrambe le parti possono recedere in qualsiasi momento mediante comunicazione scritta o tramite la piattaforma con preavviso di 30 giorni."
      }
    ]
  };

  private excelPreviewData: ExcelPreviewData = {
    items: [
      {
        code: 'FT-9921',
        description: 'Servizi di Consulenza Finanziaria - Maggio 2026',
        quantity: 1,
        unitPrice: 850.00,
        total: 850.00
      },
      {
        code: 'FT-8210',
        description: 'Gestione canone piattaforma API trading',
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
    title: 'Repubblica Italiana',
    subtitle: "Carta d'Identità Elettronica",
    lastName: 'Rossi',
    firstName: 'Mario',
    birthDate: '15/08/1990',
    notes: "Documento d'identità in corso di validità."
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
    console.log(`Download avviato per: ${doc.name} (${doc.type}, ${doc.size})`);
  }
}
