import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ClientesConDificultadService } from 'src/app/services/clientes-con-dificultad.service';



export interface clienteData {
  clI_ID: number;
  clI_COD: string;
  clI_NOM: string;
  comentarios: string;
  fecha: string;
  fechaBaja: string;
  fechaModi: string;
  userBaja: boolean;
  userModi: string;
  usuario: string;
}


@Component({
  selector: 'app-clientes-con-dificultades',
  templateUrl: './clientes-con-dificultades.component.html',
  styleUrls: ['./clientes-con-dificultades.component.css']
})
export class ClientesConDificultadesComponent implements OnInit {
  ELEMENT_DATA!: clienteData[];
  dataSource = new MatTableDataSource<clienteData>(this.ELEMENT_DATA)
  displayedColumns: string[] = ['clI_ID', 'clI_COD', 'clI_NOM',
    'fecha',
    'usuario', 
    'comentarios'
  //'fechaBaja',
  //'fechaModi',
  //'userBaja',
  //'userModi',
];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private service: ClientesConDificultadService,private _liveAnnouncer: LiveAnnouncer) { }
  

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit(): void {
    this.cargarClientes();
  }

  cargarClientes(){
    let resp = this.service.getClientesCDList();
    resp.subscribe(report => this.dataSource.data = report as clienteData[])
  }
  
}
