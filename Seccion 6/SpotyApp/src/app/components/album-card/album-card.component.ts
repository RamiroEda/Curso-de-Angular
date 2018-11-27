import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.css']
})
export class AlbumCardComponent implements OnInit {
  @Input() album: Album;

  constructor() {}

  ngOnInit() {
  }

}

export interface Album {
  id?: string;
  nombre: string;
  artista: string;
  urlImagen: string;
  fechaPublicacion?: string;
}
