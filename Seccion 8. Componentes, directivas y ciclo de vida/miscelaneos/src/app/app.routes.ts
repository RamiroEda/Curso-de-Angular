import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '**', component: HomeComponent },
];

export const APP_ROUTES = RouterModule.forRoot(routes, {useHash: true});
