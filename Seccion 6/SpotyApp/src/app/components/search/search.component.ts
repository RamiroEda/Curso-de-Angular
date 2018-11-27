import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Album } from '../album-card/album-card.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  term: string;
  artistas: Album[];

  constructor(private service: SpotifyService) {
    service.addOnSearchChange((val) => {
      this.artistas = service.searchArtista(val);
      this.term = val;
    });
    this.artistas = service.searchArtista(service.searchVal);
    this.term = service.searchVal;
  }

  ngOnInit() {
  }
}
