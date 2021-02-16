import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { NumbersComponent } from '@pages/numbers/numbers.component';
import { UncommonComponent } from '@pages/uncommon/uncommon.component';
import { BasicsComponent } from '@pages/basics/basics.component';
import { OrderComponent } from '@pages/order/order.component';

import { UpperPipe } from '@pipes/upper.pipe';
import { CanFlyPipe } from './pipes/can-fly.pipe';
import { SortHeroPipe } from './pipes/sort-hero.pipe';


@NgModule({
    declarations: [
        NumbersComponent,
        UncommonComponent,
        BasicsComponent,
        OrderComponent,
        UpperPipe,
        CanFlyPipe,
        SortHeroPipe
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
