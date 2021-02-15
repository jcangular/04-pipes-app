import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
    exports: [
        ButtonModule,
        CardModule,
        BadgeModule,
        MenubarModule
    ]
})
export class PrimeNgModule { }
