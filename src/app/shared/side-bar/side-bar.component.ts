import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { LoginComponent } from 'src/app/components/login/login.component';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
  providers: [LoginComponent]
})
export class SideBarComponent {
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
  constructor(private routes: Router, private breakpointObserver: BreakpointObserver, private data: LoginComponent) {

  }

  ngOnInit(): void {

    if (this.email === 'administracion@tecnolab.com.ar') {
      this.imgUser = '../../../assets/imagenes/Gustavo.png'
      this.nameUser = 'Gustavo Auteri'
      this.emailUser = 'gauteri@tecnolab.com.ar'
    }
    else if (this.email === 'direccion@tecnolab.com.ar') {
      this.imgUser = '../../../assets/imagenes/MicrosoftTeams-image.png'
      this.nameUser = 'Roberto Faivovich'
      this.emailUser = 'rfaivovich@tecnolab.com.ar'
    }

  }

}
