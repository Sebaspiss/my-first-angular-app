import { Injectable, signal } from '@angular/core';

export interface Language {
    label: string;
    code: string;
}

export interface Currency {
    label: string;
    code: string;
    symbol: string;
}

@Injectable({
    providedIn: 'root'
})
export class SettingsService {
    languages: Language[] = [
        { label: 'Italiano', code: 'it' },
        { label: 'English', code: 'en' },
        { label: 'Español', code: 'es' }
    ];

    currencies: Currency[] = [
        { label: 'Euro', code: 'EUR', symbol: '€' },
        { label: 'Dollar', code: 'USD', symbol: '$' },
        { label: 'Pound', code: 'GBP', symbol: '£' }
    ];

    language = signal<Language>(this.languages[0]);
    currency = signal<Currency>(this.currencies[0]);
    timeFormat = signal<'12h' | '24h'>('24h');
    emailNotifications = signal<boolean>(true);
    maxDailyTransactions = signal<number>(20);
}
