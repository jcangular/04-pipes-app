import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { BasicsComponent } from '@pages/basics/basics.component';
import { NumbersComponent } from '@pages/numbers/numbers.component';
import { OrderComponent } from '@pages/order/order.component';
import { UncommonComponent } from '@pages/uncommon/uncommon.component';

const routes: Routes = [
    { path: '', component: BasicsComponent, pathMatch: 'full' },
    { path: 'numbers', component: NumbersComponent },
    { path: 'uncommon', component: UncommonComponent },
    { path: 'order', component: OrderComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
