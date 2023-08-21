import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';
import { MasterDetailComponent } from './pages/master-detail/master-detail.component';

const routes: Routes = [
  { path: 'home', component: PrincipalComponent },
  { path: 'factura', component: MasterDetailComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
