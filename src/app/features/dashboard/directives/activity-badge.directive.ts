import { Directive, input, computed } from '@angular/core';

@Directive({
    selector: '[appActivityBadge]',
    standalone: true,
    host: {
        'class': 'w-8 h-8 rounded-full flex items-center justify-center',
        '[class.bg-green-50]': 'isBuy()',
        '[class.text-green-600]': 'isBuy()',
        '[class.bg-red-50]': '!isBuy()',
        '[class.text-red-600]': '!isBuy()'
    }
})
export class ActivityBadgeDirective {
    readonly isBuyInput = input.required<boolean | 'buy' | 'sell'>({ alias: 'appActivityBadge' });
    readonly isBuy = computed(() => this.isBuyInput() === true || this.isBuyInput() === 'buy');
}
