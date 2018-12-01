import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Album } from '../components/album-card/album-card.component';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  token = 'Bearer BQC0xHcjsnN9-EAw9qfYbxm0r-EykXUehoQpvyp6rZHV4vZ9VNZ9LL2SjVhxfpkKANm9SPwUm3N12bdZ8-' +
          'Lp6OOMFu98ReZmpmoMXYxGNyR22pp0q0bEgZfj8PJPXT3hK6ezg_oRP5_6AQdnm816gujnJ2ffUZkVB_Pd3OUrCHzkLic';
  searchVal: string;
  spotify_uris: string[];
  loading: boolean;

  constructor(private http: HttpClient) {
  }

  query(url: string, {pipe = (v) =>  v, then = (v) => {}}) {
    this.loading = true;
    const resp = this.http.get(url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': this.token
      }
    }).pipe(
      map(pipe)
    );
    resp.subscribe(then);
  }

  getLastReleases(): Album[] {
    const last: Album[] = [];
    this.query(
      'https://api.spotify.com/v1/browse/new-releases?country=MX&limit=20',
      {
        pipe: (val: any) => {
          return val.albums.items;
        },
        then: (val: any) => {
          if (val) {
            val.forEach(album => {
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
          this.loading = false;
        }
      }
    );
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
    this.query(
      `https://api.spotify.com/v1/search?q=${name}&type=artist&limit=10`,
      {
        pipe: (val: any) => {
          return val.artists.items;
        },
        then: (val: any) => {
          if (val) {
            val.forEach(artista => {
              artistas.push({
                id: artista.id,
                nombre: artista.name,
                artista: 'Seguidores: ' + artista.followers.total,
                urlImagen: artista.images[0] != null ? artista.images[0].url :
                            'http://bobjames.com/wp-content/themes/soundcheck/images/default-album-artwork.png'
              });
            });
          }
          this.loading = false;
        }
      }
    );
    return artistas;
  }

  getTracks(id: string) {
    const canciones: Song[] = [];
    this.query(
      `https://api.spotify.com/v1/albums/${id}/tracks`,
      {
        then: (val: any) => {
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
        }
      }
    );
    return canciones;
  }

  getAlbumInfo(id: string, f: any) {
    this.query(
      `https://api.spotify.com/v1/albums/${id}`,
      {
        then: (val: any) => {
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
        }
      }
    );
  }

  getArtistInfo(id: string, f: any) {
    this.query(
      `https://api.spotify.com/v1/artists/${id}`,
      {
        then: (artista: any) => {
          const album: Album = {
            id: artista.id,
            nombre: artista.name,
            artista: 'Seguidores: ' + artista.followers.total,
            urlImagen: artista.images[0] != null ? artista.images[0].url :
                        'http://bobjames.com/wp-content/themes/soundcheck/images/default-album-artwork.png'
          };
          f(album);
        }
      }
    );
  }

  getTopTracks(id: string): Song[] {
    const canciones: Song[] = [];
    this.query(
      `https://api.spotify.com/v1/artists/${id}/top-tracks?country=MX`,
      {
        then: (val: any) => {
          if (val.tracks) {
            val.tracks.forEach(cancion => {
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
        }
      }
    );
    return canciones;
  }

  getArtistAlbums(id: string) {
    const last: Album[] = [];
    this.query(
      `https://api.spotify.com/v1/artists/${id}/albums`,
      {
        then: (val: any) => {
          if (val.items) {
            val.items.forEach(album => {
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
        }
      }
    );
    return last;
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
