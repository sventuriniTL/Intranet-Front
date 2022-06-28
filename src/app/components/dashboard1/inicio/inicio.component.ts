import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ClientesConDificultadesComponent } from '../reportes/clientes-con-dificultades/clientes-con-dificultades.component';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  providers:[NgbCarouselConfig]
})
export class InicioComponent implements OnInit {
  images = [1, 2].map((n) => `../../assets/imagenes/slider${n}.jpg`);
  constructor(config: NgbCarouselConfig) {
    config.interval = 3000;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
  }
  

}
