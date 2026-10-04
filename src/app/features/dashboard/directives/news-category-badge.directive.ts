import { Directive, input } from '@angular/core';

@Directive({
    selector: '[appNewsCategoryBadge]',
    standalone: true,
    host: {
        'class': 'text-[10px] uppercase font-bold px-2 py-0.5 rounded',
        '[class.text-blue-600]': "category() === 'Promo'",
        '[class.bg-blue-50]': "category() === 'Promo'",
        '[class.text-purple-600]': "category() === 'Product' || category() === 'Prodotto'",
        '[class.bg-purple-50]': "category() === 'Product' || category() === 'Prodotto'",
        '[class.text-orange-600]': "category() === 'Commodity'",
        '[class.bg-orange-50]': "category() === 'Commodity'",
        '[class.text-green-600]': "category() === 'Tech'",
        '[class.bg-green-50]': "category() === 'Tech'"
    }
})
export class NewsCategoryBadgeDirective {
    readonly category = input.required<string>({ alias: 'appNewsCategoryBadge' });
}
