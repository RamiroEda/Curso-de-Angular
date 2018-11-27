import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './/components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeInfoComponent } from './components/heroe-info/heroe-info.component';
import { BuscarComponent } from './components/buscar/buscar.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'info/:id', component: HeroeInfoComponent },
    { path: 'buscar/:nombre', component: BuscarComponent },
    { path: '**', redirectTo: 'home' },
];

export const APP_ROUTING = RouterModule.forRoot(routes, {useHash: true});
