import { Component } from "@angular/core";
import { PrimeIcons } from "primeng/api";
import { TabsModule } from 'primeng/tabs';

@Component({
    selector: "page-account",
    template: `
        <div class="card">
            <p-tabs value="account">
                <p-tablist>
                    @for (tab of tabs; track tab.route) {
                        <p-tab [value]="tab.route" class="flex items-center text-inherit">
                            <i [class]="tab.icon"></i>
                            <span>{{ tab.label }}</span>
                        </p-tab>
                    }
                </p-tablist>
            </p-tabs>
        </div>
    `,
    imports: [TabsModule]
})

// gestione anagrafica utente - messaggi - documenti
export class Account {
    tabs = [ 
        {
            route: "/userInfo",
            icon: PrimeIcons.USER,
            label: "anagrafica"
        },
        {
            route: "2",
            icon: PrimeIcons.ENVELOPE,
            label: "messaggi"
        },
        {
            route: "3",
            icon: PrimeIcons.FILE,
            label: "documenti"
        }
    ];
}