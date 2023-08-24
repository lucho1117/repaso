import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormDenunciaComponent } from './form-denuncia/form-denuncia.component';

export const ROUTER_DENUNCIA: Routes = [
  { path: 'form-denuncia', component: FormDenunciaComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];
/* export const APP_ROUTING = RouterModule.forRoot(ROUTER_DENUNCIA); */

/* @NgModule({
  imports: [RouterModule.forRoot(ROUTER_DENUNCIA)],
  exports: [RouterModule]
})
export class AppRoutingModule { } */
