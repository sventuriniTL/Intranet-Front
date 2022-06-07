import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard1Component } from './dashboard1.component';
import { InicioComponent } from './inicio/inicio.component';
import { PowerbiComponent } from './powerbi/powerbi.component';
import { ReportesComponent } from './reportes/reportes.component';
import { SideBarComponent } from './sidebar/sidebar.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {
    path: '', component: Dashboard1Component, children: [
      { path: '', component: InicioComponent },
      { path: 'usuarios', component: UsuariosComponent },
      { path: 'reportes', component: ReportesComponent },
      { path: 'powerBi', component: PowerbiComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Dashboard1RoutingModule { }
