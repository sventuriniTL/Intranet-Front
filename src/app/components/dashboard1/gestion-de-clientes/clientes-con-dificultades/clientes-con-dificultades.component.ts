import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ClientesConDificultadService } from 'src/app/services/clientes-con-dificultad.service';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints, MediaMatcher } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ServiceAccionesClienteService } from 'src/app/services/service-acciones-cliente.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteClienteConDificultadesComponent } from './delete-cliente-con-dificultades/delete-cliente-con-dificultades.component';
import { SidenavManagerService, UIState } from 'src/app/services/sidenav-manager.service';
import { SidebarService } from 'src/app/services/sidebar.service';
import { EditClientesConDificultadesComponent } from './edit-clientes-con-dificultades/edit-clientes-con-dificultades.component';




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
  public dataSource = new MatTableDataSource<clienteData>(this.ELEMENT_DATA)
  displayedColumns: string[] = ['clI_ID', 'clI_COD', 'clI_NOM',
    'fecha',
    'usuario',
    'comentarios',
    'icono1'
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('snav') sidenav!: MatSidenav;
  @ViewChild(MatTable, { static: true }) table!: MatTable<any>;


  constructor(private service: ClientesConDificultadService,
    private _accionesClientesService: ServiceAccionesClienteService,
    public changeDetectorRef: ChangeDetectorRef,
    public media: MediaMatcher,
    private breakpointObserver: BreakpointObserver,
    public dialog: MatDialog,
    private ui: SidenavManagerService,
    public sidebarDerechoService: SidebarService,
    private editComponent: EditClientesConDificultadesComponent) {

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  get uiState(): UIState {
    return this.ui._uiState;
  }


  
  updateRowData(row_obj) {
    this.dataSource.filterPredicate = (value, key) => {
      if (value.clI_ID == row_obj.id) {
        value.comentarios = row_obj.name;
      }
      return true;
    };
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

  public cargarClientes() {
    let resp = this.service.getClientesCDList();
    resp.subscribe(report => this.dataSource.data = report as clienteData[])
  }

  clienteDataRow(element: any) {
    this._accionesClientesService.pasarDato(element)
    this._accionesClientesService.handlerData(element)
  }
  editar(data) {
    this.clienteDataRow(data)
    this.sidebarDerechoService.open('sidebar-2')
  }

  openDialog(): void {
    this.dialog.open(DeleteClienteConDificultadesComponent, {
      width: '350px',
      data: 'Está seguro?',
    });
  }
}
