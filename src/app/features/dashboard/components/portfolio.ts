import { Component, inject } from "@angular/core";
import { Card } from "primeng/card";
import { Divider } from "primeng/divider";
import { PortfolioService } from "@coreServices/portfolio.service";
import { PortfolioChangeDirective } from "../directives/portfolio-change.directive";

@Component({
    selector: "portfolio",
    imports: [Card, Divider, PortfolioChangeDirective],
    templateUrl: "./portfolio.html"
})
export class Portfolio {
    portfolioService = inject(PortfolioService);

    assetColors: string[] = [
        'bg-orange-100 text-orange-600',
        'bg-purple-100 text-purple-600',
        'bg-amber-100 text-amber-600',
        'bg-blue-100 text-blue-600'
    ];

    getAssetColor(index: number): string {
        return this.assetColors[index % this.assetColors.length];
    }
}