import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Factura } from '../models/master-detail';

const routes: Routes = [
  { path: 'factura', component: Factura },
  { path: '**', pathMatch: 'full', redirectTo: 'factura' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
