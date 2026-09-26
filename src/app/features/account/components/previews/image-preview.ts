import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePreviewData } from '../../models/document.model';

@Component({
  selector: 'doc-image-preview',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white dark:bg-gray-900 p-6 shadow-md rounded border border-gray-200 dark:border-gray-700 max-w-sm w-full text-center space-y-4">
      <div class="text-xs text-gray-400 dark:text-gray-500 uppercase font-semibold tracking-wider">
        Anteprima File Caricato
      </div>
      <div class="w-full h-44 bg-gradient-to-tr from-blue-400 to-indigo-600 rounded-lg flex flex-col items-center justify-center text-white p-4 relative overflow-hidden">
        <div class="absolute top-2 left-2 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm"></div>
        <div class="text-sm font-bold tracking-widest uppercase mb-1">{{ data.title }}</div>
        <div class="text-[10px] opacity-80 mb-6">{{ data.subtitle }}</div>
        <div class="flex items-center gap-3 w-full border-t border-white/20 pt-3">
          <div class="w-10 h-10 rounded bg-white/30 backdrop-blur-sm flex-shrink-0"></div>
          <div class="text-left leading-none space-y-1">
            <span class="text-[9px] block opacity-75">Cognome: {{ data.lastName }}</span>
            <span class="text-[9px] block opacity-75">Nome: {{ data.firstName }}</span>
            <span class="text-[9px] block opacity-75">Nato il: {{ data.birthDate }}</span>
          </div>
        </div>
      </div>
      <div class="text-xs text-gray-500 dark:text-gray-400">{{ data.notes }}</div>
    </div>
  `
})
export class DocImagePreview {
  @Input({ required: true }) data!: ImagePreviewData;
}
