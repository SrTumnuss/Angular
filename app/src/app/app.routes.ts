import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RotaComponent } from './components/rota/rota.component';
import { ClientDetailComponent } from './components/client-detail/client-detail.component';

export const routes: Routes = [

{path: '', component: HomeComponent},
{path:'nova-rota', component: RotaComponent},
{path: 'cliente/:id', component: ClientDetailComponent},
{path: '**', component: HomeComponent}



];
