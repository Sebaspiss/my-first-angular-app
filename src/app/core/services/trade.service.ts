import { Injectable, inject, signal, computed } from '@angular/core';
import { SettingsService } from './settings.service';
import { PRODUCT_STATUS, ProductStatus } from '../../features/trade/trade.constants';

export interface Product {
    id: number;
    symbol: string;
    name: string;
    category: string;
    price: number;
    change: number;
    status: ProductStatus;
}

export interface ComputedProduct extends Product {
    convertedPrice: number;
    formattedPrice: string;
}

@Injectable({
    providedIn: 'root'
})
export class TradeService {
    private settingsService = inject(SettingsService);

    // Mock exchange rates relative to EUR
    rates: { [key: string]: number } = {
        'EUR': 1.0,
        'USD': 1.12,
        'GBP': 0.84
    };

    products = signal<Product[]>([
        {
            id: 1,
            symbol: "BTC",
            name: "Bitcoin ETF",
            category: "Crypto",
            price: 61250,
            change: 3.42,
            status: PRODUCT_STATUS.TRADABLE
        },
        {
            id: 2,
            symbol: "ETH",
            name: "Ethereum Trust",
            category: "Crypto",
            price: 3140.50,
            change: 1.85,
            status: PRODUCT_STATUS.TRADABLE
        },
        {
            id: 3,
            symbol: "GOLD",
            name: "Digital Gold ETC",
            category: "Commodities",
            price: 2150.80,
            change: -0.24,
            status: PRODUCT_STATUS.TRADABLE
        },
        {
            id: 4,
            symbol: "AAPL",
            name: "Apple Inc.",
            category: "Stocks",
            price: 174.30,
            change: 0.95,
            status: PRODUCT_STATUS.TRADABLE
        },
        {
            id: 5,
            symbol: "TSLA",
            name: "Tesla Motors",
            category: "Stocks",
            price: 162.10,
            change: -1.50,
            status: PRODUCT_STATUS.SUSPENDED
        }
    ]);

    computedProducts = computed<ComputedProduct[]>(() => {
        const rate = this.rates[this.settingsService.currency().code] || 1.0;
        const symbol = this.settingsService.currency().symbol;

        return this.products().map(product => {
            const convertedPrice = product.price * rate;
            const formattedPrice = `${symbol} ${convertedPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
            return {
                ...product,
                convertedPrice,
                formattedPrice
            };
        });
    });

    addProduct(product: Product) {
        this.products.update(current => [...current, product]);
    }
}
