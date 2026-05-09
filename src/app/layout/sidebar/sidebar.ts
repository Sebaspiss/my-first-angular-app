import { Component, OnInit } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-sidebar',
    template: `
        <nav class="flex flex-col h-full bg-surface-0 border-r border-surface-200">
            <div class="p-4 border-b border-surface-200">
                <span class="text-xl font-semibold">Fintech Company</span>
            </div>
            <p-menu [model]="items" styleClass="w-full border-none shadow-none" />
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
                        icon: 'pi pi-palette',
                        routerLink: '/dashboard'
                    },
                    {
                        label: 'Trade',
                        icon: 'pi pi-link',
                        routerLink: '/trade'
                    },
                    {
                        label: 'Account',
                        icon: 'pi pi-home',
                        routerLink: '/account'
                    },
                    {
                        label: 'Settings',
                        icon: '',
                        routerLink: '/settings'
                    }
                ]
            }
        ];
    }
}