import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'capitalizar'})
export class CapitalizarPipe implements PipeTransform {
    transform(value: string, cuantas?: number): string {
        value = value.toLowerCase();
        const vals = value.split(' ');

        if (!cuantas) {
            cuantas = vals.length;
        }

        vals.slice(0, cuantas).forEach((el, i, arr) => {
            vals[i] = vals[i][0].toUpperCase() + el.substr(1);
        });
        return vals.join(' ');
    }
}
