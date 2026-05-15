import { Component } from "@angular/core";
import { Card } from "primeng/card";
import { DividerModule } from "primeng/divider"

@Component({
    selector: "activities",
    template: `
        <p-card header="Activities" class="w-full h-full">
            <p>1000.00 €</p>
            <div class="card">
            <p>
                Buy +10.000 €
            </p>
            <p-divider />
            <p>
                Sell -2000 €
            </p>
            <p-divider />
            <p>
                Buy +4000 €
            </p>
            <p-divider />
            <p>
                Sell -10.000 €
            </p>
        </div>
    </p-card>
    `,
    imports: [Card,DividerModule]
})

export class Activities {}