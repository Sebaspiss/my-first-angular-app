import { Component, inject } from "@angular/core";
import { RouterModule, RouterOutlet, Router } from '@angular/router';
import { PrimeIcons } from "primeng/api";
import { TabsModule } from 'primeng/tabs';

@Component({
    selector: "page-account",
    templateUrl: "./account.html",
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