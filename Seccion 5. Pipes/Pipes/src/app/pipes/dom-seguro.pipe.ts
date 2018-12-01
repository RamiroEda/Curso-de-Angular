import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domSeguro'
})
export class DomSeguroPipe implements PipeTransform {

  constructor(private dom: DomSanitizer) {}

  transform(value: string, url: string): any {
    return this.dom.bypassSecurityTrustResourceUrl(url + value);
  }

}
