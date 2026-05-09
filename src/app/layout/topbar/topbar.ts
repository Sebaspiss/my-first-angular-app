import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
    selector: 'app-topbar',
    template: `
        <div class="p-4 border-b border-surface-200">
            <p-card header="Simple Card">
                <p class="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                    quas!
                </p>
            </p-card>
        </div>
    `,
    standalone: true,
    imports: [CardModule]
})
export class TopBar {}