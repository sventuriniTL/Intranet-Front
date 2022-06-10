import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Observable } from 'rxjs';
import { ClientesConDificultadService } from 'src/app/services/clientes-con-dificultad.service';


@Component({
  selector: 'app-clientes-con-dificultades',
  templateUrl: './clientes-con-dificultades.component.html',
  styleUrls: ['./clientes-con-dificultades.component.css']
})
export class ClientesConDificultadesComponent implements OnInit {
  clientesCDList$!: Observable<any[]>;

  constructor(private service: ClientesConDificultadService) {  
   }

  ngOnInit(): void {
    this.cargarClientes();
  }

  cargarClientes(){
    this.clientesCDList$ = this.service.getClientesCDList();
  }
  
}
