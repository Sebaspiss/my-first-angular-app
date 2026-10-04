import { Directive, input, computed } from '@angular/core';

@Directive({
    selector: '[appActivityAmount]',
    standalone: true,
    host: {
        'class': 'text-sm font-bold',
        '[class.text-green-600]': 'isBuy()',
        '[class.text-red-600]': '!isBuy()'
    }
})
export class ActivityAmountDirective {
    readonly isBuyInput = input.required<boolean | 'buy' | 'sell'>({ alias: 'appActivityAmount' });
    readonly isBuy = computed(() => this.isBuyInput() === true || this.isBuyInput() === 'buy');
}
