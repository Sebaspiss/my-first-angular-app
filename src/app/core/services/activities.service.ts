import { Injectable, inject, signal, computed } from '@angular/core';
import { SettingsService } from './settings.service';

export interface Activity {
    id: string | number;
    type: 'buy' | 'sell';
    title: string;
    date: string;
    status: string;
    baseAmount: number;
    shares: string;
}

export interface ComputedActivity extends Activity {
    formattedAmount: string;
    isBuy: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class ActivitiesService {
    private settingsService = inject(SettingsService);

    // Mock exchange rates relative to EUR
    rates: { [key: string]: number } = {
        'EUR': 1.0,
        'USD': 1.12,
        'GBP': 0.84
    };

    activities = signal<Activity[]>([
        {
            id: 1,
            type: 'buy',
            title: 'Buy Bitcoin',
            date: '30/05/2026',
            status: 'Executed',
            baseAmount: 10000.00,
            shares: '0.33 BTC'
        },
        {
            id: 2,
            type: 'sell',
            title: 'Sell Microsoft',
            date: '28/05/2026',
            status: 'Executed',
            baseAmount: 2000.00,
            shares: '5.2 shares'
        },
        {
            id: 3,
            type: 'buy',
            title: 'Buy Amazon',
            date: '25/05/2026',
            status: 'Executed',
            baseAmount: 4000.00,
            shares: '22.4 shares'
        },
        {
            id: 4,
            type: 'sell',
            title: 'Sell Ethereum',
            date: '20/05/2026',
            status: 'Executed',
            baseAmount: 10000.00,
            shares: '3.12 ETH'
        }
    ]);

    computedActivities = computed<ComputedActivity[]>(() => {
        const rate = this.rates[this.settingsService.currency().code] || 1.0;
        const symbol = this.settingsService.currency().symbol;

        return this.activities().map(activity => {
            const converted = activity.baseAmount * rate;
            const sign = activity.type === 'buy' ? '+' : '-';
            const formattedAmount = `${sign}${symbol} ${converted.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
            const isBuy = activity.type === 'buy';

            return {
                ...activity,
                formattedAmount,
                isBuy
            };
        });
    });

    addActivity(activity: Activity) {
        this.activities.update(current => [activity, ...current]);
    }
}
