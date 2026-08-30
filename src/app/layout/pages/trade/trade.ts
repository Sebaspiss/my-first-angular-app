import { Component, OnInit, signal, inject, computed } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TableModule } from "primeng/table";
import { Button } from "primeng/button";
import { Card } from "primeng/card";
import { SettingsService } from "../../../core/services/settings.service";
import { PortfolioService } from "../../../core/services/portfolio.service";
import { PRODUCT_STATUS } from "./trade.constants";

@Component({
    selector: "trade",
    templateUrl: "./trade.html",
    standalone: true,
    imports: [
        CommonModule,
        TableModule,
        Button,
        Card
    ]
})
export class Trade implements OnInit {
    readonly PRODUCT_STATUS = PRODUCT_STATUS;
    
    settingsService = inject(SettingsService);
    portfolioService = inject(PortfolioService);

    products = signal<any[]>([
        {
            id: 1,
            symbol: "BTC",
            name: "Bitcoin ETF",
            category: "Criptovalute",
            price: 61250,
            change: 3.42,
            status: PRODUCT_STATUS.NEGOZIABILE
        },
        {
            id: 2,
            symbol: "ETH",
            name: "Ethereum Trust",
            category: "Criptovalute",
            price: 3140.50,
            change: 1.85,
            status: PRODUCT_STATUS.NEGOZIABILE
        },
        {
            id: 3,
            symbol: "GOLD",
            name: "Oro Digitale ETC",
            category: "Materie Prime",
            price: 2150.80,
            change: -0.24,
            status: PRODUCT_STATUS.NEGOZIABILE
        },
        {
            id: 4,
            symbol: "AAPL",
            name: "Apple Inc.",
            category: "Azionario",
            price: 174.30,
            change: 0.95,
            status: PRODUCT_STATUS.NEGOZIABILE
        },
        {
            id: 5,
            symbol: "TSLA",
            name: "Tesla Motors",
            category: "Azionario",
            price: 162.10,
            change: -1.50,
            status: PRODUCT_STATUS.SOSPESO
        }
    ]);

    computedProducts = computed(() => {
        const rate = this.portfolioService.rates[this.settingsService.currency().code] || 1.0;
        return this.products().map(product => {
            const convertedPrice = product.price * rate;
            return {
                ...product,
                convertedPrice
            };
        });
    });

    ngOnInit() {}

    getBadgeClass(category: string): string {
        switch (category) {
            case "Criptovalute":
                return "bg-orange-100 text-orange-600";
            case "Materie Prime":
                return "bg-amber-100 text-amber-600";
            case "Azionario":
                return "bg-blue-100 text-blue-600";
            default:
                return "bg-gray-100 text-gray-600";
        }
    }

    formatPrice(price: number): string {
        const symbol = this.settingsService.currency().symbol;
        const formatted = price.toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        return `${symbol} ${formatted}`;
    }
}