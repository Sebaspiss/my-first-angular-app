import { Directive, computed, input } from '@angular/core';

const BASE_CLASSES = 'text-[10px] uppercase font-bold px-2 py-0.5 rounded';

/** Chiavi normalizzate (trim + lowercase) → classi colore. */
const CATEGORY_STYLES = new Map<string, string>([
    ['promo', 'bg-blue-50 text-blue-600'],
    ['product', 'bg-purple-50 text-purple-600'],
    ['prodotto', 'bg-purple-50 text-purple-600'],
    ['commodity', 'bg-orange-50 text-orange-600'],
    ['tech', 'bg-green-50 text-green-600'],
]);

@Directive({
    selector: '[appNewsCategoryBadge]',
    host: {
        '[class]': 'badgeClasses()',
    },
})
export class NewsCategoryBadgeDirective {
    readonly category = input.required<string>({ alias: 'appNewsCategoryBadge' });

    protected readonly badgeClasses = computed(() => {
        const key = (this.category() ?? '').trim().toLowerCase();
        // Categorie non riconosciute: nessun colore (comportamento invariato).
        return `${BASE_CLASSES} ${CATEGORY_STYLES.get(key) ?? ''}`.trim();
    });
}
