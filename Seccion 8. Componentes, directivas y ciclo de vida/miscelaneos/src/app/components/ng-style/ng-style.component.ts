import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <h1>ngStyle</h1>
    <hr>
    <p [style.fontSize.px]="tamano">
      Esta es una etiqueta
    </p>
    <button class="btn btn-primary" (click)="tamano = tamano + 1">
      <i class="fa fa-plus"></i>
    </button>

    <button class="btn btn-primary" (click)="tamano = tamano - 1">
      <i class="fa fa-minus"></i>
    </button>
    <br><br><br>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {
  tamano = 20;

  style: any = {
    'font-size': this.tamano + 'px',
    'color' : 'green'
  };

  constructor() { }

  ngOnInit() {
  }

}
