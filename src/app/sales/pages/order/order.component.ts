import { Component } from '@angular/core';
import { Color, Hero } from '@interfaces/sale.interfaces';

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styles: [
    ]
})
export class OrderComponent {

    upperFlag = true;

    heros: Hero[] = [
        { name: 'Superman', fly: true, color: Color.blue },
        { name: 'Batman', fly: false, color: Color.black },
        { name: 'Robin', fly: false, color: Color.green },
        { name: 'Daredevil', fly: false, color: Color.red },
        { name: 'Linterna Verde', fly: true, color: Color.green },
    ];

    orderBy = '';

    public toggleCase(): void {
        this.upperFlag = !this.upperFlag;
    }

    public changeOrderBy(orderBy: string): void {
        this.orderBy = orderBy;
    }
}
