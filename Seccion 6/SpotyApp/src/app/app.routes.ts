import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { AlbumComponent } from './components/album/album.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: 'artist/:id', component: ArtistaComponent },
    { path: 'album/:id', component: AlbumComponent },
    { path: '**', component: HomeComponent },
];

export const APP_ROUTES = RouterModule.forRoot(routes, {useHash: true});
