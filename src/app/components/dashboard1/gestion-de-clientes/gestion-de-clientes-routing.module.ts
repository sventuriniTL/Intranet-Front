import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesConDificultadesComponent } from './clientes-con-dificultades/clientes-con-dificultades.component';
import { GestionDeClientesComponent } from './gestion-de-clientes.component';

const routes: Routes = [
  {
    path: '', component: GestionDeClientesComponent, children: [
      { path: 'clientesConDificultades', component: ClientesConDificultadesComponent },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionDeClientesRoutingModule { }
