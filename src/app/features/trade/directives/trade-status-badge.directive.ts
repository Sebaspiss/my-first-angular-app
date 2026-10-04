import { Directive, input, computed } from '@angular/core';
import { PRODUCT_STATUS, ProductStatus } from '../trade.constants';

@Directive({
    selector: '[tradeStatusBadge]',
    standalone: true,
    host: {
        'class': 'px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border',
        '[class.bg-green-50]': 'isTradable()',
        '[class.text-green-700]': 'isTradable()',
        '[class.border-green-200]': 'isTradable()',
        '[class.bg-red-50]': 'isSuspended()',
        '[class.text-red-700]': 'isSuspended()',
        '[class.border-red-200]': 'isSuspended()'
    }
})
export class TradeStatusBadgeDirective {
    readonly status = input.required<ProductStatus | string>({ alias: 'tradeStatusBadge' });

    readonly isTradable = computed(() => this.status() === PRODUCT_STATUS.TRADABLE);
    readonly isSuspended = computed(() => this.status() === PRODUCT_STATUS.SUSPENDED);
}
