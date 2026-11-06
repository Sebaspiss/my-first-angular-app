import { Directive, computed, input } from '@angular/core';

const BASE_CLASSES =
    'w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs uppercase shadow-sm flex-shrink-0';

const DEFAULT_STYLE = 'bg-gray-100 text-gray-600';

/** Chiavi normalizzate (trim + lowercase) → classi colore. */
const CATEGORY_STYLES = new Map<string, string>([
    // Crypto
    ['crypto', 'bg-orange-100 text-orange-600'],
    ['criptovalute', 'bg-orange-100 text-orange-600'],
    // Commodities
    ['commodities', 'bg-amber-100 text-amber-600'],
    ['commodity', 'bg-amber-100 text-amber-600'],
    ['materie prime', 'bg-amber-100 text-amber-600'],
    // Stocks
    ['stocks', 'bg-blue-100 text-blue-600'],
    ['stock', 'bg-blue-100 text-blue-600'],
    ['azionario', 'bg-blue-100 text-blue-600'],
]);

@Directive({
    selector: '[tradeAssetBadge]',
    host: {
        '[class]': 'badgeClasses()',
    },
})
export class TradeAssetBadgeDirective {
    readonly category = input.required<string>({ alias: 'tradeAssetBadge' });

    protected readonly badgeClasses = computed(() => {
        const key = (this.category() ?? '').trim().toLowerCase();
        return `${BASE_CLASSES} ${CATEGORY_STYLES.get(key) ?? DEFAULT_STYLE}`;
    });
}
