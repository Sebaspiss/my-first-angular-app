import { Directive, input, computed } from '@angular/core';

@Directive({
    selector: '[tradeAssetBadge]',
    standalone: true,
    host: {
        'class': 'w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs uppercase shadow-sm flex-shrink-0',
        '[class.bg-orange-100]': 'isCrypto()',
        '[class.text-orange-600]': 'isCrypto()',
        '[class.bg-amber-100]': 'isCommodity()',
        '[class.text-amber-600]': 'isCommodity()',
        '[class.bg-blue-100]': 'isStock()',
        '[class.text-blue-600]': 'isStock()',
        '[class.bg-gray-100]': 'isDefault()',
        '[class.text-gray-600]': 'isDefault()'
    }
})
export class TradeAssetBadgeDirective {
    readonly category = input.required<string>({ alias: 'tradeAssetBadge' });

    readonly isCrypto = computed(() => ['Crypto', 'Criptovalute'].includes(this.category()));
    readonly isCommodity = computed(() => ['Commodities', 'Commodity', 'Materie Prime'].includes(this.category()));
    readonly isStock = computed(() => ['Stocks', 'Stock', 'Azionario'].includes(this.category()));
    readonly isDefault = computed(() => !this.isCrypto() && !this.isCommodity() && !this.isStock());
}
