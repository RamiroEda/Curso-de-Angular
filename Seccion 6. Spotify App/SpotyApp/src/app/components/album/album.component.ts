import { Component, OnInit, Input } from '@angular/core';
import { SpotifyService, Song } from '../../services/spotify.service';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../album-card/album-card.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  songs: Song[];
  @Input() album: Album;
  id: string;

  constructor(private service: SpotifyService, private actRoute: ActivatedRoute, private client: HttpClient) {}

  ngOnInit() {
    window.scrollTo(0, 0);
    if (this.album == null) {
      this.actRoute.params.subscribe((val) => {
        this.id = val.id;
        this.songs = this.service.getTracks(this.id);
        this.service.getAlbumInfo(this.id, (resp: Album) => {
          this.album = resp;
        });
      });
    } else {
      this.songs = this.service.getTracks(this.album.id);
    }
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
