import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Album } from '../components/album-card/album-card.component';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  token = 'Bearer BQC3_hAU7qIvLjxfpUoWIzIluTBM5IdSCxiSNm3_4_73D9NvzEn-d3xhC4LgNCTyQZ__otSOdrj' +
  'q4cKLknXi6nQuadVyGyxUgJep_X4Wuc27qJOtQnRkSyPhqD_BsoEgQblDUhgojc4Ys40vrildX7_vpvk3Ew8Lv4eqss5AW1AeXw';
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
            id: album.id,
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
    const artistas: Album[] = [];
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
          artistas.push({
            id: artista.id,
            nombre: artista.name,
            artista: 'Seguidores: ' + artista.followers.total,
            urlImagen: artista.images[0] != null ? artista.images[0].url :
                        'http://bobjames.com/wp-content/themes/soundcheck/images/default-album-artwork.png'
          });
        });
      }
    });
    return artistas;
  }

  getTracks(id: string) {
    const canciones: Song[] = [];
    const resp = this.http.get(`https://api.spotify.com/v1/albums/${id}/tracks`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': this.token
      }
    });
    resp.subscribe((val: any) => {
      if (val.items) {
        val.items.forEach(cancion => {
          const durSec = cancion.duration_ms / 1000 / 60;
          canciones.push({
            id: cancion.id,
            numero: cancion.track_number,
            nombre: cancion.name,
            minutos: Math.floor(durSec),
            segundos: Math.floor((durSec % 1) * 100),
            preview: cancion.preview_url
          });
        });
      }
    });
    return canciones;
  }

  getAlbumInfo(id: string, f: any) {
    const resp = this.http.get(`https://api.spotify.com/v1/albums/${id}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': this.token
      }
    });
    resp.subscribe((val: any) => {
      const artistas: string[] = [];

      val.artists.forEach(artista => {
        artistas.push(artista.name);
      });

      const album: Album = {
        id: val.id,
        nombre: val.name,
        artista: artistas.join(', '),
        urlImagen: val.images[0].url,
        fechaPublicacion: val.release_date
      };
      f(album);
    });
  }
}

export interface Song {
  id: string;
  numero: number;
  nombre: string;
  minutos: number;
  segundos: number;
  preview: string;
}
