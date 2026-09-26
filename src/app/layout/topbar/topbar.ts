import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';

@Component({
    selector: 'app-topbar',
    templateUrl: './topbar.html',
    standalone: true,
    imports: [
        AvatarModule,
        IconFieldModule,
        InputIconModule,
        InputTextModule
    ]
})
export class TopBar {}