import { Component, HostBinding, Input, OnInit, ViewChild, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { LoginComponent } from 'src/app/components/login/login.component';
import { MatSidenav } from '@angular/material/sidenav';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers:[LoginComponent]
})
export class SideBarComponent {
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private breakpointObserver: BreakpointObserver) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  email = localStorage.getItem("email");
  showFiller = false;
  imgUser!: string;
  nameUser!: string;
  emailUser!: string;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  ngOnInit(): void {
  this.userMatch(this.email);
  }












  
  private userMatch(email:string|null) {
    if (email === 'administracion@tecnolab.com.ar') {
      this.imgUser = '../../../assets/imagenes/Gustavo.png';
      this.nameUser = 'Gustavo Auteri';
      this.emailUser = 'gauteri@tecnolab.com.ar';
    }
    else if (email === 'direccion@tecnolab.com.ar') {
      this.imgUser = '../../../assets/imagenes/MicrosoftTeams-image.png';
      this.nameUser = 'Roberto Faivovich';
      this.emailUser = 'rfaivovich@tecnolab.com.ar';
    }
  }
}
