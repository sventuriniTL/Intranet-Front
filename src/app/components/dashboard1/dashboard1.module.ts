import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';


import { Dashboard1RoutingModule } from './dashboard1-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { Dashboard1Component } from './dashboard1.component';
import { InicioComponent } from './inicio/inicio.component';
import { SideBarComponent } from './sidebar/sidebar.component';
import { ReportesComponent } from './reportes/reportes.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PowerbiComponent } from './powerbi/powerbi.component';
import { NgbModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { Powerbi2Component } from './powerbi2/powerbi2.component';
import { ClientesConDificultadesComponent } from './gestion-de-clientes/clientes-con-dificultades/clientes-con-dificultades.component';
import { AddClienteConDificultadComponent } from './gestion-de-clientes/clientes-con-dificultades/add-cliente-con-dificultad/add-cliente-con-dificultad.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DeleteClienteConDificultadesComponent } from './gestion-de-clientes/clientes-con-dificultades/delete-cliente-con-dificultades/delete-cliente-con-dificultades.component';
import { EditClientesConDificultadesComponent } from './gestion-de-clientes/clientes-con-dificultades/edit-clientes-con-dificultades/edit-clientes-con-dificultades.component';
import { SidebarDerechoComponent } from './sidebar-derecho/sidebar-derecho.component';
import { GestionDeClientesComponent } from './gestion-de-clientes/gestion-de-clientes.component';




@NgModule({
  declarations: [
    Dashboard1Component,
    InicioComponent,
    ReportesComponent,
    UsuariosComponent,
    SideBarComponent,
    PowerbiComponent,
    Powerbi2Component,
    ClientesConDificultadesComponent,
    AddClienteConDificultadComponent,
    DeleteClienteConDificultadesComponent,
    EditClientesConDificultadesComponent,
    SidebarDerechoComponent,
    GestionDeClientesComponent,
  ],
  imports: [
    FlexLayoutModule,
    CommonModule,
    Dashboard1RoutingModule,
    MaterialModule,
    NgbCarouselModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [DeleteClienteConDificultadesComponent],
  providers: [
    ClientesConDificultadesComponent,
    EditClientesConDificultadesComponent,
    
  ],
})
export class Dashboard1Module { }
