import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from 'src/components/dashboard/dashboard.component';
import { NavbarComponent } from 'src/components/navbar/navbar.component';
import { ClientesComponent } from 'src/components/clientes/clientes.component';
import { AbmClientesComponent } from 'src/components/abm-clientes/abm-clientes.component';
import { SubMenuPuntosComponent } from 'src/components/sub-menu-puntos/sub-menu-puntos.component';
import { ConceptosComponent } from 'src/components/conceptos/conceptos.component';
import { ReglasComponent } from 'src/components/reglas/reglas.component';
import { VencimientosComponent } from 'src/components/vencimientos/vencimientos.component';
import { BolsasComponent } from 'src/components/bolsas/bolsas.component';
import { UsoPuntosComponent } from 'src/components/uso-puntos/uso-puntos.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    ClientesComponent,
    AbmClientesComponent,
    SubMenuPuntosComponent,
    ConceptosComponent,
    ReglasComponent,
    VencimientosComponent,
    BolsasComponent,
    UsoPuntosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
