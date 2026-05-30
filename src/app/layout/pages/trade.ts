import { Component, OnInit, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DataViewModule } from "primeng/dataview";
import { ButtonModule } from "primeng/button";
import { TagModule } from "primeng/tag";

@Component({
    selector: "trade",
    templateUrl: "./trade.html",
    standalone: true,
    imports: [
        CommonModule,
        DataViewModule,
        ButtonModule,
        TagModule
    ]
})
export class Trade implements OnInit {

    products = signal<any[]>([
        {
            id: 1,
            name: "Bitcoin ETF",
            category: "Crypto",
            price: 45000,
            rating: 4.8,
            image: "bamboo-watch.jpg",
            inventoryStatus: "INSTOCK"
        },
        {
            id: 2,
            name: "Ethereum Bond",
            category: "Crypto",
            price: 3200,
            rating: 4.5,
            image: "black-watch.jpg",
            inventoryStatus: "LOWSTOCK"
        },
        {
            id: 3,
            name: "Tokenized Gold",
            category: "Commodities",
            price: 2100,
            rating: 4.9,
            image: "blue-band.jpg",
            inventoryStatus: "OUTOFSTOCK"
        }
    ]);

    ngOnInit() {}

    getSeverity(product: any) {
        switch (product.inventoryStatus) {
            case "INSTOCK":
                return "success";
            case "LOWSTOCK":
                return "warn";
            case "OUTOFSTOCK":
                return "danger";
            default:
                return null;
        }
    }
}