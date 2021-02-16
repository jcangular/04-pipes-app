import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styles: [
    ]
})
export class MenuComponent implements OnInit {


    items: MenuItem[] = [];

    constructor() { }

    ngOnInit(): void {
        this.items = [{
            label: 'Pipes de Angular',
            icon: 'pi pi-desktop',
            items: [
                { label: 'Textos y fechas', icon: 'pi pi-align-left', routerLink: '/' },
                { label: 'Números', icon: 'pi pi-dollar', routerLink: 'numbers' },
                { label: 'No cómunes', icon: 'pi pi-globe', routerLink: 'uncommon' },
            ]
        }, {
            label: 'Pipes propios',
            icon: 'pi pi-cog',
            routerLink: 'order'
        }];
    }

}
