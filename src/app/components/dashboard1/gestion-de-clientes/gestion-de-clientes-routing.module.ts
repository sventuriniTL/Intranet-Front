import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from '../usuarios/usuarios.component';
import { ClientesConDificultadesComponent } from './clientes-con-dificultades/clientes-con-dificultades.component';
import { GestionDeClientesComponent } from './gestion-de-clientes.component';

const routes: Routes = [
  { path: '', component: GestionDeClientesComponent },
  { path: 'clientesConDificultades', component: ClientesConDificultadesComponent },
  { path: 'usuarios', component: UsuariosComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionDeClientesRoutingModule { }
