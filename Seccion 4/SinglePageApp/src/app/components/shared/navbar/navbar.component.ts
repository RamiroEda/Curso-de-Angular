import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor( private service: HeroesService, private router: Router ) {}

  ngOnInit() {
  }

  buscarHeroe(nombre: string) {
    if (nombre.length > 0) {
      this.router.navigate(['/buscar', nombre]);
    }
  }

}
