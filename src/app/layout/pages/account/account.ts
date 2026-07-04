import { Component, inject } from "@angular/core";
import { RouterModule, RouterOutlet, Router } from '@angular/router';
import { PrimeIcons } from "primeng/api";
import { TabsModule } from 'primeng/tabs';

@Component({
    selector: "page-account",
    template: `
        <div class="px-5">
            <p-tabs [value]="activeTab">
                <p-tablist>
                @for (tab of tabs; track tab.route) {
                    <p-tab [value]="tab.route" [routerLink]="tab.route" class="cursor-pointer">
                        <i [class]="tab.icon" class="mr-2"></i>
                        <span>{{ tab.label }}</span>
                    </p-tab>
                }
                </p-tablist>
            </p-tabs>
        </div>
        <div class="mt-4">
            <router-outlet></router-outlet>
        </div>
    `,
    imports: [RouterModule, RouterOutlet, TabsModule],
    standalone: true
})
export class Account {
    private router = inject(Router);

    tabs = [
        { route: 'userInfo', icon: PrimeIcons.USER, label: 'Anagrafica' },
        { route: 'messages', icon: PrimeIcons.ENVELOPE, label: 'Messaggi' },
        { route: 'documents', icon: PrimeIcons.FILE, label: 'Documenti' },
    ];

    get activeTab(): string {
        const urlSegments = this.router.url.split('/');
        return urlSegments[urlSegments.length - 1];
    }
}