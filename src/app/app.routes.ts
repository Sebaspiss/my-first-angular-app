import { Routes } from '@angular/router';
import { Account } from './layout/pages/account/account';
import { Dashboard } from './layout/pages/dashboard/dashboard';
import { Settings } from './layout/pages/settings/settings';
import { Trade } from './layout/pages/trade/trade';
import { UserInfo } from './layout/pages/account/components/userInfo';
import { Messages } from './layout/pages/account/components/messages';
import { Documents } from './layout/pages/account/components/documents';

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
