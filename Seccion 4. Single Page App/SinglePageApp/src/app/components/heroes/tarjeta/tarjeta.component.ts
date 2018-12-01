import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Heroe } from '../../../services/heroes.service';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  @Input() heroe: any;

  @Output() eleccion: EventEmitter<number>;

  constructor() {
    this.eleccion = new EventEmitter();
  }

  ngOnInit() {
  }

  onSelected() {
    this.eleccion.emit(this.heroe.index);
  }

}
