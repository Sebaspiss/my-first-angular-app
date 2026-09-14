import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.html',
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