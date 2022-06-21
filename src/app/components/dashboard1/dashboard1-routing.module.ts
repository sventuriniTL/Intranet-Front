import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard1Component } from './dashboard1.component';
import { InicioComponent } from './inicio/inicio.component';
import { PowerbiComponent } from './powerbi/powerbi.component';
import { Powerbi2Component } from './powerbi2/powerbi2.component';
import { ClientesConDificultadesComponent } from './reportes/clientes-con-dificultades/clientes-con-dificultades.component';
import { ReportesComponent } from './reportes/reportes.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {
    path: '', component: Dashboard1Component, children: [
      { path: '', component: InicioComponent },
      { path: 'usuarios', component: UsuariosComponent },
      {
        path: 'reportes', component: ReportesComponent, children: [
          { path: 'clientesConDificultades', component: ClientesConDificultadesComponent }
        ]
      },
      { path: 'powerBi', component: PowerbiComponent },
      { path: 'powerBi2', component: Powerbi2Component },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Dashboard1RoutingModule { }
