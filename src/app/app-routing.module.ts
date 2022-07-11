import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard1Component } from './components/dashboard1/dashboard1.component';
import { LoginComponent } from './components/login/login.component';
import { PowerbiComponent } from './components/dashboard1/powerbi/powerbi.component';
import { RegisterComponent } from './components/register/register.component';
import { GestionDeClientesComponent } from './components/dashboard1/gestion-de-clientes/gestion-de-clientes.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', loadChildren: () => import('./components/dashboard1/dashboard1.module').then(x => x.Dashboard1Module)},
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
  { path: 'gestionDeClientes', component: GestionDeClientesComponent},
  { path: 'register', component: RegisterComponent, pathMatch: 'full' },
  { path: 'powerBi', component: PowerbiComponent, pathMatch: 'full' },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
