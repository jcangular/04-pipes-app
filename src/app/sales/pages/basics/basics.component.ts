import { Component } from '@angular/core';

@Component({
    selector: 'app-basics',
    templateUrl: './basics.component.html',
    styles: [
    ]
})
export class BasicsComponent {

    lowerName = 'josé';
    upperName = 'JOSÉ';
    fullName = 'JoSé CArlOs pALmA';

    today: Date = new Date();

}
