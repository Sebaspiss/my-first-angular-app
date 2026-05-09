import { Component } from "@angular/core";
import { Card } from "primeng/card";
import { DividerModule } from "primeng/divider"

@Component({
    selector: "portfolio",
    template: `
        <p-card header="Portfolio" class="w-[800px] h-[400px]">
            <p>1000.00 €</p>
            <div class="card">
            <p>
                BITCOIN 30.000 €
            </p>
            <p-divider />
            <p>
                MICROSOFT 2000 €
            </p>
            <p-divider />
            <p>
                AMAZON 4000 €
            </p>
            <p-divider />
            <p>
                ETHEREUM 10.000 €
            </p>
        </div>
    </p-card>
    `,
    imports: [Card,DividerModule]
})

export class Portfolio {}