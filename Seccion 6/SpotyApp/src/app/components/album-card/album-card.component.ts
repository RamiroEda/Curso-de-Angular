import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.css']
})
export class AlbumCardComponent implements OnInit {
  @Input() album: Album;

  constructor(private router: Router) {}

  ngOnInit() {
  }

  navigate() {
    if (this.album.fechaPublicacion) {
      this.router.navigate(['/album', this.album.id]);
    } else {
      this.router.navigate(['/artist', this.album.id]);
    }
  }
}

export interface Album {
  id: string;
  nombre: string;
  artista: string;
  urlImagen: string;
  fechaPublicacion?: string;
}
