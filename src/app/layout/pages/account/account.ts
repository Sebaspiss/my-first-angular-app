import { Component } from "@angular/core";
import {RouterModule, RouterOutlet} from '@angular/router';
import { PrimeIcons } from "primeng/api";
import { TabsModule } from 'primeng/tabs';

@Component({
    selector: "page-account",
    template: `
            <p-tabs px-5>
                <p-tablist>
                @for (tab of tabs; track tab.route) {
                    <p-tab>
                    <a [routerLink]="tab.route" class="flex items-center gap-2 text-inherit no-underline">
                        <i [class]="tab.icon"></i>
                        <span>{{ tab.label }}</span>
                    </a>
                    </p-tab>
                }
                </p-tablist>
            </p-tabs>
      <router-outlet></router-outlet>
    `,
    imports: [RouterModule, RouterOutlet, TabsModule],
    standalone: true
})

export class Account {
    tabs = [
        { route: 'userInfo', icon: PrimeIcons.USER, label: 'Anagrafica' },
        { route: 'messages', icon: PrimeIcons.ENVELOPE, label: 'Messaggi' },
        { route: 'documents', icon: PrimeIcons.FILE, label: 'Documenti' },
    ];
}