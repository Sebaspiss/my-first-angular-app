import { Component } from "@angular/core";
import { Card } from "primeng/card";
import { DividerModule } from "primeng/divider"

@Component({
    selector: "news",
    template: `
        <p-card header="News" class="w-full h-full">
            <p>1000.00 €</p>
            <div class="card">
            <p>
                Discount -10% from 10/06/2026
            </p>
            <p-divider />
            <p>
                05/01/2026: New ETF All-World
            </p>
            <p-divider />
            <p>
                02/03/2026: Oil +2.6%
            </p>
            <p-divider />
            <p>
                NASDAQ +12% in 18 months
            </p>
        </div>
    </p-card>
    `,
    imports: [Card,DividerModule]
})

export class News {}