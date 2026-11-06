import { Directive, input, computed } from '@angular/core';

@Directive({
  selector: '[appPortfolioChange]',
  host: {
    'class': 'text-[10px] font-medium',
    '[class.text-green-600]': 'isPositive()',
    '[class.text-red-600]': '!isPositive()'
  }
})
export class PortfolioChangeDirective {
  readonly isPositive = input.required<boolean>({ alias: 'appPortfolioChange' });
}
