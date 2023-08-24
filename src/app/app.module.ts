import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ViewChild/* CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA  */} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';

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
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';

import { DenunciaComponent } from './pages/denuncia/denuncia.component';
import { FormDenunciaComponent } from './pages/denuncia/form-denuncia/form-denuncia.component';
import { DenuncianteComponent } from './pages/denuncia/form-denuncia/denunciante/denunciante.component';
import { VictimaComponent } from './pages/denuncia/form-denuncia/victima/victima.component';
import { DenunciadoComponent } from './pages/denuncia/form-denuncia/denunciado/denunciado.component';
import { HechosComponent } from './pages/denuncia/form-denuncia/hechos/hechos.component';
import { FinalizacionComponent } from './pages/denuncia/form-denuncia/finalizacion/finalizacion.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterDetailComponent,
    PrincipalComponent,
    FacturaComponent,
    NavbarComponent,
    FooterComponent,
    DenunciaComponent,
    FormDenunciaComponent,
    DenuncianteComponent,
    VictimaComponent,
    DenunciadoComponent,
    HechosComponent,
    FinalizacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,

    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatExpansionModule,
    MatIconModule,
  ],
/*   schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ], */
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
