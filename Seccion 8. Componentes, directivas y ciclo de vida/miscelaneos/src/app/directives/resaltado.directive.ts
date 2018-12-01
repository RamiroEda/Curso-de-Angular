import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private el: ElementRef) {
    console.log('Directiva personalizada creada');
    el.nativeElement.style.backgroundColor = 'yellow';
  }

  @Input('appResaltado') color: string;

  @HostListener('mouseenter') enter() {
    this.el.nativeElement.style.backgroundColor = this.color || 'green';
  }

  @HostListener('mouseleave') leave() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

}
