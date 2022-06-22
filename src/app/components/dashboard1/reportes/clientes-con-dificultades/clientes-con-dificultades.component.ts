import { Component, OnInit, ViewChild, AfterViewInit, Input, HostListener, Directive, ChangeDetectorRef } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ClientesConDificultadService } from 'src/app/services/clientes-con-dificultad.service';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints, MediaMatcher } from '@angular/cdk/layout';
import { Observable} from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';




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
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  showFiller = false;
  ELEMENT_DATA!: clienteData[];
  dataSource = new MatTableDataSource<clienteData>(this.ELEMENT_DATA)
  displayedColumns: string[] = ['clI_ID', 'clI_COD', 'clI_NOM',
    'fecha',
    'usuario', 
    'comentarios',
    'icono1'
];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('snav') sidenav!: MatSidenav;


  
  constructor(private service: ClientesConDificultadService, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private breakpointObserver: BreakpointObserver) { 
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  
  
  
  }
  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

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
