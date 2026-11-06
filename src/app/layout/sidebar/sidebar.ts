import { Component } from '@angular/core';
import { RouterLinkActive, RouterLink } from '@angular/router';
import { NavLinkIconDirective } from '@/layout/sidebar/nav-link-icon.directive';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.html',
    imports: [RouterLink, RouterLinkActive, NavLinkIconDirective]
})
export class SideBar {
    menuItems = [
        { label: 'Dashboard', route: '/dashboard', icon: 'pi pi-chart-line' },
        { label: 'Trade', route: '/trade', icon: 'pi pi-money-bill' },
        { label: 'Account', route: '/account', icon: 'pi pi-user' },
        { label: 'Settings', route: '/settings', icon: 'pi pi-cog' }
    ];
}