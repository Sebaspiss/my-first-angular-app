import { Injectable, inject, signal, computed } from '@angular/core';
import { SettingsService } from './settings.service';

@Injectable({
    providedIn: 'root'
})
export class PortfolioService {
    private settingsService = inject(SettingsService);

    // Base values in EUR
    baseBalance = signal<number>(46000.00);
    baseAvailableCash = signal<number>(14250.30); // Set to match trade.html value of 14.250,30
    baseMarginUsed = signal<number>(3120.00);     // Set to match trade.html value of 3.120,00
    baseTodayProfit = signal<number>(836.00);

    // Mock exchange rates relative to EUR
    rates: { [key: string]: number } = {
        'EUR': 1.0,
        'USD': 1.12,
        'GBP': 0.84
    };

    assets = signal([
        { symbol: 'BTC', name: 'Bitcoin', allocation: '65.2%', baseVal: 30000.00, change: '+2.4%', isPositive: true },
        { symbol: 'ETH', name: 'Ethereum', allocation: '21.7%', baseVal: 10000.00, change: '+1.1%', isPositive: true },
        { symbol: 'AMZN', name: 'Amazon Inc.', allocation: '8.7%', baseVal: 4000.00, change: '-0.8%', isPositive: false },
        { symbol: 'MSFT', name: 'Microsoft Corp.', allocation: '4.4%', baseVal: 2000.00, change: '+0.5%', isPositive: true }
    ]);

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
        return `${symbol} ${this.totalBalance().toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    });

    formattedAvailableCash = computed(() => {
        const symbol = this.settingsService.currency().symbol;
        return `${symbol} ${this.availableCash().toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    });

    formattedMarginUsed = computed(() => {
        const symbol = this.settingsService.currency().symbol;
        return `${symbol} ${this.marginUsed().toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    });

    formattedTodayProfit = computed(() => {
        const symbol = this.settingsService.currency().symbol;
        const profit = this.todayProfit();
        const sign = profit >= 0 ? '+' : '';
        return `${sign}${symbol} ${profit.toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    });

    computedAssets = computed(() => {
        const rate = this.rates[this.settingsService.currency().code] || 1.0;
        const symbol = this.settingsService.currency().symbol;
        return this.assets().map(asset => {
            const convertedVal = asset.baseVal * rate;
            const formattedVal = `${symbol} ${convertedVal.toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
            return {
                ...asset,
                formattedVal
            };
        });
    });
}
