import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbmClientesComponent } from 'src/components/abm-clientes/abm-clientes.component';
import { BolsasComponent } from 'src/components/bolsas/bolsas.component';
import { ClientesComponent } from 'src/components/clientes/clientes.component';
import { ConceptosComponent } from 'src/components/conceptos/conceptos.component';
import { DashboardComponent } from 'src/components/dashboard/dashboard.component';
import { ReglasComponent } from 'src/components/reglas/reglas.component';
import { SubMenuPuntosComponent } from 'src/components/sub-menu-puntos/sub-menu-puntos.component';
import { UsoPuntosComponent } from 'src/components/uso-puntos/uso-puntos.component';
import { VencimientosComponent } from 'src/components/vencimientos/vencimientos.component';

const routes: Routes = [
  { path:'',
    component:DashboardComponent,
    children:[
      {path:'clientes', component:ClientesComponent},
      {path:'clientes/abmClientes', component: AbmClientesComponent},
      {path:'clientes/abmClientes/:id', component: AbmClientesComponent},
      {path:'puntos',component:SubMenuPuntosComponent},
      {path:'puntos/conceptos',component:ConceptosComponent},
      {path:'puntos/reglas',component:ReglasComponent},
      {path:'puntos/vencimientos',component:VencimientosComponent},
      {path:'puntos/bolsas',component:BolsasComponent},
      {path:'puntos/usoPuntos',component:UsoPuntosComponent},
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
