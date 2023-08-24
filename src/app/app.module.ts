import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterDetailComponent } from './pages/master-detail/master-detail.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { FacturaComponent } from './pages/factura/factura.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { FooterComponent } from './common/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

import { DenunciaComponent } from './pages/denuncia/denuncia.component';
import { FormDenunciaComponent } from './pages/denuncia/form-denuncia/form-denuncia.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterDetailComponent,
    PrincipalComponent,
    FacturaComponent,
    NavbarComponent,
    FooterComponent,
    DenunciaComponent,
    FormDenunciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    MatToolbarModule,
    MatButtonModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
