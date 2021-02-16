import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'upper'
})
export class UpperPipe implements PipeTransform {

    transform(value: string, upper: boolean = true): string {
        return upper
            ? value.toUpperCase()
            : value.toLowerCase();
    }

}
