import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';
import { MasterDetailComponent } from './pages/master-detail/master-detail.component';
import { FacturaComponent } from './pages/factura/factura.component';

const routes: Routes = [
  { path: 'home', component: PrincipalComponent },
  { path: 'prototipo', component: MasterDetailComponent },
  { path: 'factura', component: FacturaComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
