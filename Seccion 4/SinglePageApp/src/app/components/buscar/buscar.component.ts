import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  heroes: any[];
  nombre: string;

  constructor(private service: HeroesService, private activatedRoute: ActivatedRoute, private router: Router) {
    activatedRoute.params.subscribe((params) => {
      this.nombre = params.nombre;
      this.heroes = this.service.find(params.nombre);
    });
  }

  ngOnInit() {}

  verHeroe(i: number) {
    this.router.navigate(['/info', i]);
  }
}
