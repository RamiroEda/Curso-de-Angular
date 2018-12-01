import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Album } from '../album-card/album-card.component';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  albums: Album[] = [];
  loading = {loaded: false};

  constructor(public service: SpotifyService) {
    this.albums = service.getLastReleases();
  }

  ngOnInit() {
  }

}
