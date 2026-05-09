import { Component } from "@angular/core";
import { SideBar } from "./sidebar/sidebar";
import { TopBar } from "./topbar/topbar";
import { RouterOutlet } from "@angular/router";

@Component({
    selector: 'app-layout',
    standalone: true,
    templateUrl: './layout.html',
    imports: [SideBar, TopBar, RouterOutlet]
})

export class Layout {}