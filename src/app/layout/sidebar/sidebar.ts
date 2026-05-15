import { Component, OnInit } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { PrimeIcons, MenuItem } from 'primeng/api';

@Component({
    selector: 'app-sidebar',
    template: `
        <nav class="flex flex-col h-full bg-surface-0 border-surface-200">
            <div class="p-4">
                <span class="text-xl font-semibold">Fintech Company</span>
            </div>
            <p-menu [model]="items" class="w-full border-none" />
        </nav>
    `,
    standalone: true,
    imports: [MenuModule]
})
export class SideBar implements OnInit {
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                items: [
                    {
                        label: 'Dashboard',
                        icon: PrimeIcons.CHART_LINE,
                        routerLink: '/dashboard',
                        style: {
                            '--p-menu-item-focus-color' : 'rgb(147 197 253)'
                        }
                    },
                    {
                        label: 'Trade',
                        icon: PrimeIcons.MONEY_BILL,
                        routerLink: '/trade',
                        style: {
                            '--p-menu-item-focus-color' : 'rgb(147 197 253)'
                        }
                    },
                    {
                        label: 'Account',
                        icon: PrimeIcons.USER,
                        routerLink: '/account',
                        style: {
                            '--p-menu-item-focus-color' : 'rgb(147 197 253)'
                        }
                    },
                    {
                        label: 'Settings',
                        icon: PrimeIcons.COG,
                        routerLink: '/settings',
                        style: {
                            '--p-menu-item-focus-color' : 'rgb(147 197 253)'
                        }
                    }
                ]
            }
        ];
    }
}