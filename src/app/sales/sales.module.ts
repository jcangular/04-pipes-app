import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { NumbersComponent } from '@pages/numbers/numbers.component';
import { UncommonComponent } from '@pages/uncommon/uncommon.component';
import { BasicsComponent } from '@pages/basics/basics.component';
import { OrderComponent } from '@pages/order/order.component';


@NgModule({
    declarations: [
        NumbersComponent,
        UncommonComponent,
        BasicsComponent,
        OrderComponent
    ],
    exports: [
        NumbersComponent,
        UncommonComponent,
        BasicsComponent,
        OrderComponent
    ],
    imports: [
        CommonModule,
        PrimeNgModule
    ]
})
export class SalesModule { }
