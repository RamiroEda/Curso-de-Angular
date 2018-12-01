import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: any[];

  constructor(private service: HeroesService, private router: Router) { }

  ngOnInit() {
    this.heroes = this.service.find('');
  }

  verHeroe(i: number) {
    this.router.navigate(['/info', i]);
  }
}
