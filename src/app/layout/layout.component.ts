import { Component } from "@angular/core";
import { SideBar } from "./sidebar/sidebar";
import { TopBar } from "./topbar/topbar";

@Component({
    selector: 'app-layout',
    standalone: true,
    templateUrl: './layout.component.html',
    imports: [SideBar, TopBar]
})

export class Layout {}