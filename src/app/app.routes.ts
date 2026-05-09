import { Routes } from '@angular/router';
import { Account } from './layout/pages/account';
import { Dashboard } from './layout/pages/dashboard';
import { Settings } from './layout/pages/settings';
import { Trade } from './layout/pages/trade';

export const routes: Routes = [
    {
        path: 'dashboard',
        title: "Dashboard",
        component: Dashboard
    },
    {
        path: 'trade',
        title: "Trade",
        component: Trade
    },
    {
        path: 'account',
        title: "Account",
        component: Account
    },
    {
        path: 'settings',
        title: "Settings",
        component: Settings
    },
    {
        path: '**',
        component: Dashboard
    }
];
