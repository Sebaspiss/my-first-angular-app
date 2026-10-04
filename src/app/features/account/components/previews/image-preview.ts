import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePreviewData } from '../../models/document.model';

@Component({
  selector: 'doc-image-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'image-preview.html'
})
export class DocImagePreview {
  @Input({ required: true }) data!: ImagePreviewData;
}
