import { Injectable, inject, signal, computed } from '@angular/core';
import { SettingsService } from './settings.service';

export interface PortfolioAsset {
    symbol: string;
    name: string;
    quantity: number;   // Units held
    baseVal: number;    // Position value in EUR
    change: string;
    isPositive: boolean;
}

// Tolerance used to compare floating point amounts/quantities
const EPSILON = 1e-9;

@Injectable({
    providedIn: 'root'
})
export class PortfolioService {
    private settingsService = inject(SettingsService);

    // Base values in EUR
    baseAvailableCash = signal<number>(14250.30); // Set to match trade.html value of 14.250,30
    baseMarginUsed = signal<number>(3120.00);     // Set to match trade.html value of 3.120,00
    baseTodayProfit = signal<number>(836.00);
    baseTodayPercentage = signal<number>(1.85);

    // Mock exchange rates relative to EUR
    rates: { [key: string]: number } = {
        'EUR': 1.0,
        'USD': 1.12,
        'GBP': 0.84
    };

    assets = signal<PortfolioAsset[]>([
        { symbol: 'BTC', name: 'Bitcoin', quantity: 0.4898, baseVal: 30000.00, change: '+2.4%', isPositive: true },
        { symbol: 'ETH', name: 'Ethereum', quantity: 3.1842, baseVal: 10000.00, change: '+1.1%', isPositive: true },
        { symbol: 'AMZN', name: 'Amazon Inc.', quantity: 22.4, baseVal: 4000.00, change: '-0.8%', isPositive: false },
        { symbol: 'MSFT', name: 'Microsoft Corp.', quantity: 5.2, baseVal: 2000.00, change: '+0.5%', isPositive: true }
    ]);

    // Total invested value (EUR) derived from the held assets
    baseBalance = computed(() => this.assets().reduce((sum, asset) => sum + asset.baseVal, 0));

    /** Units currently held for the given symbol (0 if not in portfolio). */
    getHoldingQuantity(symbol: string): number {
        return this.assets().find(asset => asset.symbol === symbol)?.quantity ?? 0;
    }

    /** True if the asset is held in the portfolio. */
    hasAsset(symbol: string): boolean {
        return this.getHoldingQuantity(symbol) > EPSILON;
    }

    /**
     * Buys `quantity` units at `unitPrice` (EUR), deducting the cost from available cash.
     * Returns false if the quantity is invalid or the cash is insufficient.
     */
    buy(symbol: string, name: string, quantity: number, unitPrice: number): boolean {
        const cost = quantity * unitPrice;
        if (quantity <= 0 || cost > this.baseAvailableCash() + EPSILON) {
            return false;
        }

        this.baseAvailableCash.update(cash => cash - cost);
        this.assets.update(assets => {
            const existing = assets.find(asset => asset.symbol === symbol);
            if (existing) {
                return assets.map(asset => asset.symbol === symbol
                    ? { ...asset, quantity: asset.quantity + quantity, baseVal: asset.baseVal + cost }
                    : asset);
            }
            return [...assets, { symbol, name, quantity, baseVal: cost, change: '+0.0%', isPositive: true }];
        });
        return true;
    }

    /**
     * Sells `quantity` units at `unitPrice` (EUR), adding the proceeds to available cash.
     * Returns false if the asset is not held or the quantity exceeds the holding.
     */
    sell(symbol: string, quantity: number, unitPrice: number): boolean {
        const held = this.getHoldingQuantity(symbol);
        if (quantity <= 0 || held <= EPSILON || quantity > held + EPSILON) {
            return false;
        }

        this.baseAvailableCash.update(cash => cash + quantity * unitPrice);
        this.assets.update(assets => assets
            .map(asset => {
                if (asset.symbol !== symbol) return asset;
                const remaining = Math.max(asset.quantity - quantity, 0);
                // Reduce the position value proportionally to the units sold
                return { ...asset, quantity: remaining, baseVal: asset.baseVal * (remaining / asset.quantity) };
            })
            .filter(asset => asset.quantity > EPSILON));
        return true;
    }

    // Computed balance based on selected currency
    totalBalance = computed(() => {
        const rate = this.rates[this.settingsService.currency().code] || 1.0;
        return this.baseBalance() * rate;
    });

    availableCash = computed(() => {
        const rate = this.rates[this.settingsService.currency().code] || 1.0;
        return this.baseAvailableCash() * rate;
    });

    marginUsed = computed(() => {
        const rate = this.rates[this.settingsService.currency().code] || 1.0;
        return this.baseMarginUsed() * rate;
    });

    todayProfit = computed(() => {
        const rate = this.rates[this.settingsService.currency().code] || 1.0;
        return this.baseTodayProfit() * rate;
    });

    // Formatted strings with currency symbol
    formattedTotalBalance = computed(() => {
        const symbol = this.settingsService.currency().symbol;
        return `${symbol} ${this.totalBalance().toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    });

    formattedAvailableCash = computed(() => {
        const symbol = this.settingsService.currency().symbol;
        return `${symbol} ${this.availableCash().toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    });

    formattedMarginUsed = computed(() => {
        const symbol = this.settingsService.currency().symbol;
        return `${symbol} ${this.marginUsed().toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    });

    formattedTodayProfit = computed(() => {
        const symbol = this.settingsService.currency().symbol;
        const profit = this.todayProfit();
        const sign = profit >= 0 ? '+' : '';
        return `${sign}${symbol} ${profit.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    });

    todayPercentage = computed(() => this.baseTodayPercentage());

    formattedTodayPercentage = computed(() => {
        const perc = this.todayPercentage();
        const sign = perc >= 0 ? '+' : '';
        return `${sign}${perc.toFixed(2)}% today`;
    });

    computedAssets = computed(() => {
        const rate = this.rates[this.settingsService.currency().code] || 1.0;
        const symbol = this.settingsService.currency().symbol;
        const total = this.baseBalance();
        return this.assets().map(asset => {
            const convertedVal = asset.baseVal * rate;
            const formattedVal = `${symbol} ${convertedVal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
            // Allocation is recalculated dynamically after every trade
            const allocation = `${(total > 0 ? (asset.baseVal / total) * 100 : 0).toFixed(1)}%`;
            return {
                ...asset,
                allocation,
                formattedVal
            };
        });
    });
}
