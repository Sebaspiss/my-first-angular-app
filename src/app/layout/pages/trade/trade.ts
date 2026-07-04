import { Component, OnInit, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TableModule } from "primeng/table";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";

@Component({
    selector: "trade",
    templateUrl: "./trade.html",
    standalone: true,
    imports: [
        CommonModule,
        TableModule,
        ButtonModule,
        CardModule
    ]
})
export class Trade implements OnInit {

    products = signal<any[]>([
        {
            id: 1,
            symbol: "BTC",
            name: "Bitcoin ETF",
            category: "Criptovalute",
            price: 61250,
            change: 3.42,
            status: "NEGOZIABILE"
        },
        {
            id: 2,
            symbol: "ETH",
            name: "Ethereum Trust",
            category: "Criptovalute",
            price: 3140.50,
            change: 1.85,
            status: "NEGOZIABILE"
        },
        {
            id: 3,
            symbol: "GOLD",
            name: "Oro Digitale ETC",
            category: "Materie Prime",
            price: 2150.80,
            change: -0.24,
            status: "NEGOZIABILE"
        },
        {
            id: 4,
            symbol: "AAPL",
            name: "Apple Inc.",
            category: "Azionario",
            price: 174.30,
            change: 0.95,
            status: "NEGOZIABILE"
        },
        {
            id: 5,
            symbol: "TSLA",
            name: "Tesla Motors",
            category: "Azionario",
            price: 162.10,
            change: -1.50,
            status: "SOSPESO"
        }
    ]);

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
        return price.toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }
}