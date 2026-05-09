import { Component } from "@angular/core";
import { ChartLine } from "../components/chartLine";
import { Portfolio } from "../components/portfolio";

@Component({
    selector: "page-dashboard",
    template: `
        <chartLine class="relative top-0 left-0"></chartLine>
        <portfolio class="relative top-0 right-0"></portfolio>
        `,
    imports: [ChartLine, Portfolio]
})

export class Dashboard {
    
}