import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfPreviewData } from '../../models/document.model';

@Component({
  selector: 'doc-pdf-preview',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white dark:bg-gray-900 p-8 w-full max-w-xl shadow-md rounded border border-gray-200 dark:border-gray-700 min-h-[300px] flex flex-col justify-between text-gray-800 dark:text-gray-200">
      <div>
        <div class="text-center font-bold text-lg mb-6 uppercase tracking-wider text-gray-800 dark:text-gray-100">
          {{ data.title }}
        </div>
        <div class="space-y-4 text-[11px] leading-relaxed text-justify text-gray-600 dark:text-gray-400">
          @for (art of data.articles; track art.title) {
            <p class="font-semibold text-gray-700 dark:text-gray-300">{{ art.title }}</p>
            <p>{{ art.content }}</p>
          }
        </div>
      </div>
      <div class="flex justify-between items-end border-t border-gray-100 dark:border-gray-800 pt-4 mt-8">
        <div class="text-[9px] text-gray-400">{{ data.company }}</div>
        <div class="text-right">
          <span class="text-[8px] block text-gray-400 italic">Firma Digitale Apposta</span>
          <span class="text-xs font-semibold text-gray-700 dark:text-gray-300">{{ data.signer }}</span>
        </div>
      </div>
    </div>
  `
})
export class DocPdfPreview {
  @Input({ required: true }) data!: PdfPreviewData;
}
