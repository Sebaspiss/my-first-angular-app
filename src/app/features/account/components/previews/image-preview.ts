import { Component, input } from '@angular/core';
import { ImagePreviewData } from '../../models/document.model';

@Component({
  selector: 'doc-image-preview',
  imports: [],
  templateUrl: 'image-preview.html'
})
export class DocImagePreview {
  readonly data = input.required<ImagePreviewData>();
}
