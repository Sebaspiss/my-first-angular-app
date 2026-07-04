import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-sidebar',
    template: `
        <nav class="flex flex-col h-full bg-surface-0 border-r border-surface-200">
            <div class="h-16 flex items-center px-4 border-b border-surface-200">
                <span class="text-xl font-semibold text-blue-600">Fintech Company</span>
            </div>
            
            <div class="flex-1 px-3 py-4 space-y-1">
                @for (item of menuItems; track item.route) {
                    <a 
                        [routerLink]="item.route" 
                        routerLinkActive="bg-blue-50/50 !text-blue-600 font-semibold"
                        #rla="routerLinkActive"
                        class="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition no-underline cursor-pointer group"
                    >
                        <i 
                            [class]="item.icon" 
                            [ngClass]="rla.isActive ? '!text-blue-600' : 'text-gray-500 group-hover:text-gray-900'"
                            class="text-base transition">
                        </i>
                        <span>{{ item.label }}</span>
                    </a>
                }
            </div>
        </nav>
    `,
    standalone: true,
    imports: [CommonModule, RouterModule]
})
export class SideBar implements OnInit {
    menuItems = [
        { label: 'Dashboard', route: '/dashboard', icon: 'pi pi-chart-line' },
        { label: 'Trade', route: '/trade', icon: 'pi pi-money-bill' },
        { label: 'Account', route: '/account', icon: 'pi pi-user' },
        { label: 'Settings', route: '/settings', icon: 'pi pi-cog' }
    ];

    ngOnInit() {}
}