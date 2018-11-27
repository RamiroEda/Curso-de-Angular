import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, visible: boolean = false): any {
    let rep = '';
    for (let i = 0; i < value.length; i++) {
      rep += '*';
    }
    return visible ? value : rep;
  }

}
