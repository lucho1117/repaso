import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterDetailComponent } from './pages/master-detail/master-detail.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { FacturaComponent } from './pages/factura/factura.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterDetailComponent,
    PrincipalComponent,
    FacturaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
