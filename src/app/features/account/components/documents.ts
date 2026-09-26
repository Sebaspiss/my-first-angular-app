import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { DialogModule } from 'primeng/dialog';
import { DocumentService } from '../services/document.service';
import { DocumentItem } from '../models/document.model';
import { DocPdfPreview } from './previews/pdf-preview';
import { DocExcelPreview } from './previews/excel-preview';
import { DocImagePreview } from './previews/image-preview';

@Component({
  selector: 'documents',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    CheckboxModule,
    ButtonModule,
    DividerModule,
    FormsModule,
    DialogModule,
    DocPdfPreview,
    DocExcelPreview,
    DocImagePreview
  ],
  templateUrl: './documents.html'
})
export class Documents {
  protected documentService = inject(DocumentService);
  selectedDocument: DocumentItem | null = null;

  get data(): DocumentItem[] {
    return this.documentService.documents();
  }

  get selectedCount(): number {
    return this.documentService.selectedCount;
  }

  get selectedDocumentName(): string {
    return this.selectedDocument ? this.selectedDocument.name : '';
  }

  get hasSelectedDocument(): boolean {
    return this.selectedDocument !== null;
  }

  selectAll(): void {
    this.documentService.selectAll();
  }

  openDocument(doc: DocumentItem): void {
    this.selectedDocument = doc;
  }

  closeDocument(): void {
    this.selectedDocument = null;
  }

  isDownloading = false;

  downloadDocument(doc: DocumentItem | null): void {
    if (!doc || this.isDownloading) return;
    this.isDownloading = true;
    this.documentService.downloadDocument(doc);
    setTimeout(() => {
      this.isDownloading = false;
    }, 600);
  }
}