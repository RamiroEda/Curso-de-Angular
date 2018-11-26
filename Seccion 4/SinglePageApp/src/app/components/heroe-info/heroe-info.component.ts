import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe-info',
  templateUrl: './heroe-info.component.html',
  styleUrls: ['./heroe-info.component.css']
})
export class HeroeInfoComponent implements OnInit {
  heroe: Heroe;

  constructor(private actRoute: ActivatedRoute, private service: HeroesService) {
    this.actRoute.params.subscribe( params => {
      if (params.id != null && params.id >= 0) {
        this.heroe = service.at(params.id);
      }
    });
  }

  ngOnInit() {
  }

}
