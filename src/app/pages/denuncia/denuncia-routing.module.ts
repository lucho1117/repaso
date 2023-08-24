import { Routes } from '@angular/router';
import { FormDenunciaComponent } from './form-denuncia/form-denuncia.component';
import { DenunciaComponent } from './denuncia.component';

export const ROUTER_DENUNCIA: Routes = [
  { path: '', component: DenunciaComponent, },
  { path: 'form-denuncia', component: FormDenunciaComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];
