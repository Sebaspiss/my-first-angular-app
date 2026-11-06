import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { InputText } from 'primeng/inputtext';

@Component({
    selector: 'app-topbar',
    templateUrl: './topbar.html',
    imports: [
        AvatarModule,
        IconField,
        InputIcon,
        InputText
    ]
})
export class TopBar {}