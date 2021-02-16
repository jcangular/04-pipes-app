import { Pipe, PipeTransform } from '@angular/core';

import { Hero } from '@interfaces/sale.interfaces';

@Pipe({
    name: 'sortHero'
})
export class SortHeroPipe implements PipeTransform {

    transform(heros: Hero[], orderBy: string = ''): Hero[] {
        switch (orderBy) {
            case 'name':
                return [...heros].sort((a, b) => a.name.localeCompare(b.name));
            case 'fly':
                return [...heros].sort((a, b) => a.fly > b.fly ? -1 : 1);
            case 'color':
                return [...heros].sort((a, b) => a.color > b.color ? 1 : -1);
            default:
                return [...heros];
        }
    }

}
