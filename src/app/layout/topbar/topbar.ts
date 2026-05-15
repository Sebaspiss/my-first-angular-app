import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
    selector: 'app-topbar',
    template: `
        <div class="p-2 border-b border-surface-200">
            <p-card header=""></p-card>
        </div>
    `,
    standalone: true,
    imports: [CardModule]
})
export class TopBar {}