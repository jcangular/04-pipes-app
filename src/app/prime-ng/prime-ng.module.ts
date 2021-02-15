import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
import { RippleModule } from 'primeng/ripple';
@NgModule({
    exports: [
        BadgeModule,
        ButtonModule,
        CardModule,
        FieldsetModule,
        MenubarModule,
        RippleModule
    ]
})
export class PrimeNgModule { }
