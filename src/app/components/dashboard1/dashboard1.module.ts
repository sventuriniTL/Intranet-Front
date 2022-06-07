import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Dashboard1RoutingModule } from './dashboard1-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { AppModule } from 'src/app/app.module';
import { Dashboard1Component } from './dashboard1.component';
import { InicioComponent } from './inicio/inicio.component';
import { SideBarComponent } from './sidebar/sidebar.component';
import { ReportesComponent } from './reportes/reportes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PowerbiComponent } from './powerbi/powerbi.component';


@NgModule({
  declarations: [
    Dashboard1Component,
    InicioComponent,
    ReportesComponent,
    NavbarComponent,
    UsuariosComponent,
    SideBarComponent,
    PowerbiComponent
  ],
  imports: [
    CommonModule,
    Dashboard1RoutingModule,
    MaterialModule
  ]
})
export class Dashboard1Module { }