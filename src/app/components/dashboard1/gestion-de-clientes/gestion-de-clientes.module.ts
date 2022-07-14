import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionDeClientesRoutingModule } from './gestion-de-clientes-routing.module';
import { ClientesConDificultadesComponent } from './clientes-con-dificultades/clientes-con-dificultades.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    ClientesConDificultadesComponent
  ],
  imports: [
    CommonModule,
    GestionDeClientesRoutingModule,
    MaterialModule,
  ]
})
export class GestionDeClientesModule { }
