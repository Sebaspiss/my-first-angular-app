import { Directive, input } from '@angular/core';

@Directive({
    selector: '[appActivityAmount]',
    host: {
        'class': 'text-sm font-bold',
        '[class.text-green-600]': 'isBuy()',
        '[class.text-red-600]': '!isBuy()',
    },
})
export class ActivityAmountDirective {
    readonly isBuy = input.required<boolean>({ alias: 'appActivityAmount' });
}
