import { Component } from "@angular/core";
import { SideBar } from "@/layout/sidebar/sidebar";
import { TopBar } from "@/layout/topbar/topbar";
import { RouterOutlet } from "@angular/router";

@Component({
    selector: 'app-layout',
    templateUrl: './layout.html',
    imports: [SideBar, TopBar, RouterOutlet]
})

export class Layout {}