import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { LoginComponent } from './components/login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { ChartsModule } from './charts.module';
import {LayoutModule} from '@angular/cdk/layout';
import { RegisterComponent } from './components/register/register.component';
import { PowerbiComponent } from './components/powerbi/powerbi.component';
import { AdministracionComponent } from './components/administracion/administracion.component';
import { DashboardAdministraiconComponent } from './shared/dashboard-administraicon/dashboard-administraicon.component';


@NgModule({

  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavBarComponent,
    SideBarComponent,
    MainContentComponent,
    RegisterComponent,
    PowerbiComponent,
    AdministracionComponent,
    DashboardAdministraiconComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    ChartsModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
