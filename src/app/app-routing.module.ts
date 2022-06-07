import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { PowerbiComponent } from './components/powerbi/powerbi.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardAdministraiconComponent } from './shared/dashboard-administraicon/dashboard-administraicon.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';

export const routes: Routes = [
  { path: 'principal', component:SideBarComponent, 
  children: [
    { path:'', redirectTo: 'principal', pathMatch:'full'},
    { path:'dashboardAdmin', component:DashboardAdministraiconComponent },
    { path:'**', redirectTo: 'principal', pathMatch:'full'}
  ]
},
{ path:'login',  component:LoginComponent, pathMatch:'full' }, 
{ path:'register', component:RegisterComponent, pathMatch:'full'  },
{ path:'powerBi', component:PowerbiComponent, pathMatch:'full'  },
{ path:'', redirectTo: 'login', pathMatch:'full'},
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
