import { Routes } from '@angular/router';
import { Account } from './features/account/account';
import { Dashboard } from './features/dashboard/dashboard';
import { Settings } from './features/settings/settings';
import { Trade } from './features/trade/trade';
import { UserInfo } from './features/account/components/userInfo';
import { Messages } from './features/account/components/messages';
import { Documents } from './features/account/components/documents';

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
        component: Account,
        children: [
            { path: '', redirectTo: 'userInfo', pathMatch: 'full' },
            { path: 'userInfo', component: UserInfo },
            { path: 'messages', component: Messages },
            { path: 'documents', component: Documents },
        ]
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
