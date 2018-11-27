import { Component, OnInit } from '@angular/core';
import { SpotifyService, Song } from '../../services/spotify.service';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../album-card/album-card.component';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  songs: Song[];
  album: Album;
  id: string;

  constructor(private service: SpotifyService, private actRoute: ActivatedRoute) {
    actRoute.params.subscribe((val) => {
      this.id = val.id;
      this.songs = service.getTracks(this.id);
      service.getAlbumInfo(this.id, (resp: Album) => {
        this.album = resp;
      });
    });
  }

  ngOnInit() {
    window.scrollTo(0, 0);
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
