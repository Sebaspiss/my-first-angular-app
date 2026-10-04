import { Directive, input, computed } from '@angular/core';

@Directive({
    selector: '[tradeTrendColor]',
    standalone: true,
    host: {
        'class': 'font-semibold',
        '[class.text-green-600]': 'isPositive()',
        '[class.text-red-600]': '!isPositive()'
    }
})
export class TradeTrendColorDirective {
    readonly value = input.required<number>({ alias: 'tradeTrendColor' });

    readonly isPositive = computed(() => this.value() >= 0);
}
