import { Routes } from '@angular/router';

export const ACCOUNT_ROUTES: Routes = [
  {
    path: '',
    title: 'Account',
    loadComponent: () => import('./account').then(m => m.Account),
    children: [
      { path: '', redirectTo: 'profile', pathMatch: 'full' },
      {
        path: 'profile',
        title: 'Profile',
        loadComponent: () => import('./components/user-info').then(m => m.UserInfo)
      },
      {
        path: 'messages',
        title: 'Messages',
        loadComponent: () => import('./components/messages').then(m => m.Messages)
      },
      {
        path: 'documents',
        title: 'Documents',
        loadComponent: () => import('./components/documents').then(m => m.Documents)
      }
    ]
  }
];