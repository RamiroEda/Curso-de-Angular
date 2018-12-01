import { Component, OnInit } from '@angular/core';
import { Album } from '../album-card/album-card.component';
import { SpotifyService, Song } from '../../services/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {
  artista: Album;
  albums: Album[];
  topSongs: Song[];
  id: string;

  constructor(private service: SpotifyService, private actRoute: ActivatedRoute) {
    actRoute.params.subscribe((params) => {
      this.id = params.id;
      service.getArtistInfo(params.id, (artista: Album) => {
        this.artista = artista;
      });
      this.topSongs = service.getTopTracks(this.id);
      this.albums = service.getArtistAlbums(this.id);
    });
  }

  ngOnInit() {
  }

  play(url: string, player: any) {
    console.log([player]);
    if ( player.paused ) {
      player.src = url;
      player.play();
    } else {
      player.pause();
    }
  }

}
