import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html',
    styleUrls: ['./body.component.css']
})
export class BodyComponent {
    visibility = true;
    ngIfContent: any = {
        titulo: 'ngIf prueba',
        contenido: 'Contenido para *ngIf'
    };

    ngForEls = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];
}
