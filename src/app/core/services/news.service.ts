import { Injectable, signal } from '@angular/core';

export type NewsCategory = 'Promo' | 'Product' | 'Prodotto' | 'Commodity' | 'Tech' | string;

export interface NewsItem {
    id: number | string;
    category: NewsCategory;
    date: string;
    title: string;
    description: string;
}

@Injectable({
    providedIn: 'root'
})
export class NewsService {
    news = signal<NewsItem[]>([
        {
            id: 1,
            category: 'Promo',
            date: '10/06/2026',
            title: '-10% discount on trading commissions',
            description: 'Automatically active on your account for all transactions starting today.'
        },
        {
            id: 2,
            category: 'Product',
            date: '05/01/2026',
            title: 'New All-World ETF released',
            description: 'Global physical accumulation diversification with reduced annual TER.'
        },
        {
            id: 3,
            category: 'Commodity',
            date: '02/03/2026',
            title: 'Oil prices up by +2.6%',
            description: 'Geopolitical factors drive up WTI crude benchmark prices.'
        },
        {
            id: 4,
            category: 'Tech',
            date: '18/01/2026',
            title: 'NASDAQ gains +12% in 18 months',
            description: 'Strong rally driven by tech giants and AI services expansion.'
        }
    ]);

    addNews(item: NewsItem) {
        this.news.update(current => [item, ...current]);
    }
}
