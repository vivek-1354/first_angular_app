import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
    // { path: "home", component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'about/:id', component: AboutComponent },


    // lazy loading
    {
        path: 'home',
        loadComponent: () =>
            import('./components/home/home.component').then((c) => c.HomeComponent),
    },
    {
        path: 'admin',
        loadComponent: () =>
            import('./components/admin/admin.component').then((c) => c.AdminComponent),
    },
];
