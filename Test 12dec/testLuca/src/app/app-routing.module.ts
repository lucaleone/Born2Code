import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListaUtentiComponent} from './lista-utenti/lista-utenti.component';

const routes: Routes = [
  {
    path: '',
    component: ListaUtentiComponent,
    pathMatch: 'full',
  },
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'detail',
    component: ListaUtentiComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
