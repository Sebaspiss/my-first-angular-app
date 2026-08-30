import { Component, inject } from "@angular/core";
import { Card } from "primeng/card";
import { DividerModule } from "primeng/divider";
import { CommonModule } from "@angular/common";
import { PortfolioService } from "../../../../core/services/portfolio.service";

@Component({
    selector: "portfolio",
    standalone: true,
    imports: [Card, DividerModule, CommonModule],
    templateUrl: "./portfolio.html"
})
export class Portfolio {
    portfolioService = inject(PortfolioService);
}