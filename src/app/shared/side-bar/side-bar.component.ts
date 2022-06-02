import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  showFiller = false;
  imgUser!: string;
  nameUser!: string;
  emailUser!: string;
  
  
  constructor(private routes: Router) {
   
  }

  ngOnInit(): void {
   if(this.routes.url === '/dashboardAdmin' ){
      this.imgUser = '../../../assets/imagenes/Gustavo.png'
      this.nameUser = 'Gustavo Auteri'
      this.emailUser = 'gauteri@tecnolab.com.ar'
    }
    else if (this.routes.url === '/dashBoard'){
      this.imgUser = '../../../assets/imagenes/MicrosoftTeams-image.png'
      this.nameUser = 'Roberto Faivovich'
      this.emailUser = 'rfaivovich@tecnolab.com.ar'
    }
  }

}
