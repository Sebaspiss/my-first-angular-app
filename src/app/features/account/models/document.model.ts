export type DocumentType = 'PDF' | 'Excel' | 'Image';

export interface DocumentItem {
  id: number;
  name: string;
  type: DocumentType;
  size: string;
  date: string;
  selected: boolean;
}

export interface PdfArticle {
  title: string;
  content: string;
}

export interface PdfPreviewData {
  title: string;
  articles: PdfArticle[];
  company: string;
  signer: string;
}

export interface ExcelItemRow {
  code: string;
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

export interface ExcelPreviewData {
  items: ExcelItemRow[];
  subtotal: number;
  vatRate: number;
  vatAmount: number;
  total: number;
}

export interface ImagePreviewData {
  title: string;
  subtitle: string;
  lastName: string;
  firstName: string;
  birthDate: string;
  notes: string;
}
