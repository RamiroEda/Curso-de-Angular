import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Album } from '../components/album-card/album-card.component';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  token = 'Bearer BQAeM_v9z-afxaaBoc8S7XeNnanq6wyRgy3YUJJi_bqTuQ94LizfyPrNOZi9geiFpmDa8H_17FdrYm' +
  'l2Dhd20x-rlPyudwm5mCcZlaNch0Fh9V2abS4KiKbAotPxejMy2mzDMCwvaSKfGCC5czD1BprtWprOW2CIRN_3JopQIf27mg';
  searchVal: string;

  constructor(private http: HttpClient) {}

  getLastReleases(): Album[] {
    const last: Album[] = [];
    const resp = this.http.get('https://api.spotify.com/v1/browse/new-releases?country=MX&limit=20', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': this.token
      }
    });
    resp.subscribe((val: any) => {
      if (val.albums) {
        val.albums.items.forEach(album => {
          const artistas: string[] = [];

          album.artists.forEach(artista => {
            artistas.push(artista.name);
          });

          last.push({
            nombre: album.name,
            artista: artistas.join(', '),
            urlImagen: album.images[0].url,
            fechaPublicacion: album.release_date
          });
        });
      }
    });
    return last;
  }

  onSearchChange = (val: string) => {
    this.searchVal = val;
  }

  addOnSearchChange(f: any) {
    this.onSearchChange = f;
  }

  searchArtista(name: string) {
    const last: Album[] = [];
    const resp = this.http.get('https://api.spotify.com/v1/search?q=' + name + '&type=artist&limit=10', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': this.token
      }
    });
    resp.subscribe((val: any) => {
      if (val.artists) {
        val.artists.items.forEach(artista => {
          last.push({
            id: artista.id,
            nombre: artista.name,
            artista: 'Seguidores: ' + artista.followers.total,
            urlImagen: artista.images[0] != null ? artista.images[0].url :
                        'http://bobjames.com/wp-content/themes/soundcheck/images/default-album-artwork.png'
          });
        });
      }
    });
    return last;
  }
}
