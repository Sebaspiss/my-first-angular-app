import { Directive, inject } from '@angular/core';
import { RouterLinkActive } from '@angular/router';

@Directive({
    selector: '[appNavLinkIcon]',
    standalone: true,
    host: {
        'class': 'text-base transition',
        '[class.!text-blue-600]': 'isActive',
        '[class.text-surface-400]': '!isActive',
        '[class.group-hover:text-surface-800]': '!isActive'
    }
})
export class NavLinkIconDirective {
    private readonly rla = inject(RouterLinkActive, { optional: true });

    get isActive(): boolean {
        return this.rla?.isActive ?? false;
    }
}
