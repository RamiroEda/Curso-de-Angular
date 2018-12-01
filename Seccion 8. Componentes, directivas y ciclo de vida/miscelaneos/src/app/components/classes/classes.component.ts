import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styles: []
})
export class ClassesComponent implements OnInit {
  alerta = 'alert-danger';
  loading = false;

  propiedad = {
    danger: false
  };

  constructor() { }

  ngOnInit() {
  }

  asyncFun() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
}
