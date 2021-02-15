import { Component } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
    selector: 'app-uncommon',
    templateUrl: './uncommon.component.html',
    styles: []
})
export class UncommonComponent {

    name = 'José';
    gender = 'm';
    mapInvitation = {
        m: 'invitarlo',
        f: 'invitarla'
    };

    clients: string[] = ['José', 'Carlos', 'María', 'Tulio', 'Gabriela'];

    mapClient = {
        '=0': 'ningún cliente esperando',
        1: 'un cliente esperando',
        2: 'dos clientes esperando',
        other: '# clientes esperando'
    };

    person = {
        name: 'José Carlos Palma',
        age: 38,
        address: 'Res. Santa Cruz'
    };

    heros = [
        { name: 'Superman', power: 'Super fuerza' },
        { name: 'Batman', power: 'Dinero' },
        { name: 'Aquaman', power: 'Acuático' },
    ];

    emmitting = false;

    observable: Observable<number> = interval(2000)
        .pipe(
            tap(n => this.emmitting = true)
        );

    promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promesa terminada!');
        }, 3000);
    });

    delete(): void {
        this.clients.pop();
    }

    changePerson(): void {
        if (this.name === 'José') {
            this.name = 'María';
            this.gender = 'f';
        } else {
            this.name = 'José';
            this.gender = 'm';
        }
    }
}
