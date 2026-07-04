import { Component } from '@angular/core';

@Component({
    selector: 'app-topbar',
    template: `
        <div class="h-16 flex items-center justify-between px-6 bg-surface-0 border-b border-surface-200">
            <!-- Left: Brand / Section Name -->
            <div class="flex items-center gap-2">
                <i class="pi pi-compass text-blue-500 text-lg"></i>
                <span class="font-semibold text-lg text-surface-800">Trading Desk</span>
            </div>

            <!-- Right: Search, Notifications & User Profile -->
            <div class="flex items-center gap-4">
                <!-- Search Bar (hidden on mobile) -->
                <div class="relative hidden md:block">
                    <i class="pi pi-search absolute left-3 top-1/2 -translate-y-1/2 text-surface-400"></i>
                    <input type="text" placeholder="Cerca..." class="pl-9 pr-4 py-1.5 text-sm bg-surface-50 border border-surface-200 rounded-full focus:outline-none focus:border-blue-500 w-48 transition-all" />
                </div>
                
                <!-- Notification Bell -->
                <button class="relative p-2 hover:bg-surface-50 rounded-full text-surface-600 transition cursor-pointer">
                    <i class="pi pi-bell text-lg"></i>
                    <span class="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                
                <!-- User Profile Info -->
                <div class="flex items-center gap-3 border-l border-surface-200 pl-4">
                    <div class="flex flex-col text-right hidden sm:flex">
                        <span class="text-sm font-medium text-surface-800">Mario Rossi</span>
                        <span class="text-xs text-surface-500">Premium Account</span>
                    </div>
                    <div class="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-semibold text-sm">
                        <span>MR</span>
                    </div>
                </div>
            </div>
        </div>
    `,
    standalone: true,
    imports: []
})
export class TopBar {}