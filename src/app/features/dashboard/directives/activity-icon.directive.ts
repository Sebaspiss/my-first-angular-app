import { Directive, input } from '@angular/core';

@Directive({
    selector: '[appActivityIcon]',
    host: {
        'class': 'text-xs pi',
        '[class.pi-arrow-down-left]': 'isBuy()',
        '[class.pi-arrow-up-right]': '!isBuy()',
    },
})
export class ActivityIconDirective {
    readonly isBuy = input.required<boolean>({ alias: 'appActivityIcon' });
}
