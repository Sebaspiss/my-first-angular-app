import { Directive, input, computed } from '@angular/core';

@Directive({
    selector: '[appActivityIcon]',
    standalone: true,
    host: {
        'class': 'text-xs pi',
        '[class.pi-arrow-down-left]': 'isBuy()',
        '[class.pi-arrow-up-right]': '!isBuy()'
    }
})
export class ActivityIconDirective {
    readonly isBuyInput = input.required<boolean | 'buy' | 'sell'>({ alias: 'appActivityIcon' });
    readonly isBuy = computed(() => this.isBuyInput() === true || this.isBuyInput() === 'buy');
}
