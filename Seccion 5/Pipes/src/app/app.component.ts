import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Ramiro Estrada';
  arreglo = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  PI = '3.141615989872139817293';
  numero = 0.1234;
  salario = 3200.547;
  objeto = {
    attr1: 'attr1Text',
    attr2: 'attr2Text',
    attr3: Math.PI,
    attr4: this.arreglo,
    json2: {
      attr11: 'attr11',
      json3: {
        num: 34
      }
    }
  };

  promesa = new Promise(
    (res, rej) => {
      setTimeout(() => {
        res('Async data en 4 segundos');
      }, 4000);
    }
  );

  dateTime = '09/05/10';

  malString = 'hoLa CoMo anDAS manUEl';

  videoUrl = 'Icu__0Cyzrc';

  pass = 'holis123';

  visibleStatus = false;
}
