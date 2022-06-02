import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { PowerbiComponent } from './components/powerbi/powerbi.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardAdministraiconComponent } from './shared/dashboard-administraicon/dashboard-administraicon.component';

export const routes: Routes = [
  { path:'',  component:LoginComponent}, 
  { path:'dashBoard', component:DashboardComponent },
  { path:'register', component:RegisterComponent },
  { path:'powerBi', component:PowerbiComponent },
  { path:'dashboardAdmin', component:DashboardAdministraiconComponent },
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
