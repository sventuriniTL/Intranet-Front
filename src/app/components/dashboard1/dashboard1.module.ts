import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';


import { Dashboard1RoutingModule } from './dashboard1-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { Dashboard1Component } from './dashboard1.component';
import { InicioComponent } from './inicio/inicio.component';
import { SideBarComponent } from './sidebar/sidebar.component';
import { ReportesComponent } from './reportes/reportes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PowerbiComponent } from './powerbi/powerbi.component';
import { NgbModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { Powerbi2Component } from './powerbi2/powerbi2.component';
import { ClientesConDificultadesComponent } from './reportes/clientes-con-dificultades/clientes-con-dificultades.component';
import { AddClienteConDificultadComponent } from './reportes/clientes-con-dificultades/add-cliente-con-dificultad/add-cliente-con-dificultad.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DeleteClienteConDificultadesComponent } from './reportes/clientes-con-dificultades/delete-cliente-con-dificultades/delete-cliente-con-dificultades.component';




@NgModule({
  declarations: [
    Dashboard1Component,
    InicioComponent,
    ReportesComponent,
    NavbarComponent,
    UsuariosComponent,
    SideBarComponent,
    PowerbiComponent,
    Powerbi2Component,
    ClientesConDificultadesComponent,
    AddClienteConDificultadComponent,
    DeleteClienteConDificultadesComponent,
  
    
    
    
    
  ],
  imports: [
    ReactiveFormsModule,
    FlexLayoutModule,
    CommonModule,
    Dashboard1RoutingModule,
    MaterialModule,
    NgbCarouselModule,
    NgbModule,
    FormsModule,

  

  ]
})
export class Dashboard1Module { }
