import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ClientesConDificultadService } from 'src/app/services/clientes-con-dificultad.service';
import { ServiceAccionesClienteService } from 'src/app/services/service-acciones-cliente.service';
import { SidebarService } from 'src/app/services/sidebar.service';
import { SidenavManagerService } from 'src/app/services/sidenav-manager.service';
import { ClientesConDificultadesComponent } from '../clientes-con-dificultades.component';


export interface clienteData {
  clI_COD: string;
  clI_NOM: string;
  comentarios: string;
  fecha: string;
  usuario: string;
}

@Component({
  selector: 'app-add-cliente-con-dificultad',
  templateUrl: './add-cliente-con-dificultad.component.html',
  styleUrls: ['./add-cliente-con-dificultad.component.css']
})


export class AddClienteConDificultadComponent implements OnInit {
  email = localStorage.getItem("email");
  imgUser!: string;
  nameUser!: string;
  emailUser!: string;
  loading = false;

  form: FormGroup = new FormGroup({
    cliente: new FormControl(''),
    razonSocial: new FormControl(''),
    fecha: new FormControl(''),
    usuario: new FormControl(''),
    comentarios: new FormControl(''),

  })


  constructor(private _snackBar: MatSnackBar, private fb: FormBuilder,
    private _clienteService: ClientesConDificultadService,
    private _accionesCliente: ServiceAccionesClienteService,
    private clienteComponent: ClientesConDificultadesComponent,
    private router: Router,
    private ui: SidebarService) {
    this.crearFormulario();
  }








  ngOnInit(): void {
    this.userMatch(this.email)
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  crearFormulario() {
    this.form = this.fb.group({
      cliente: ['', Validators.required],
      razonSocial: ['', Validators.required],
      fecha: ['', [Validators.required]],
      usuario: ['', Validators.required],
      comentarios: [''],
    })
  }

  public cerrar() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false
      this.ui.close('sidebar-1')
      this.reloadCurrentRoute()
    }, 1000)
  }
  public dato: any
  public valor = 0
  agregarUsuario() {

    const user: clienteData = {
      clI_COD: this.form.value.cliente,
      clI_NOM: this.form.value.razonSocial,
      comentarios: this.form.value.comentarios,
      fecha: this.form.value.fecha,
      usuario: this.form.value.usuario,
    }
    if (this.form.invalid == true) {
      this.error()
    } else {
      this.succes()
      this._clienteService.addClientesCD(user).subscribe()
    }
  }

  mostrarMensaje(mensaje: string, duracion: number) {
    this._snackBar.open(mensaje, '!', {
      duration: duracion,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    })
  }
  error() {
    this._snackBar.open('Faltan completar campos!!!', 'ÒwÓ🤚', {
      duration: 5000,
      horizontalPosition: 'left',
      verticalPosition: 'top'
    })
  }
  succes() {
    this._snackBar.open('se agregó correctamente!', '😄👍', {
      duration: 5000,
      horizontalPosition: 'left',
      verticalPosition: 'top'
    })
    this.form.reset()
  }


  userMatch(email: string | null) {
    if (email === 'administracion@tecnolab.com.ar') {
      this.imgUser = 'assets/imagenes/Gustavo.png';
      this.nameUser = 'Gustavo Auteri';
      this.emailUser = 'gauteri@tecnolab.com.ar';
    }
    else if (email === 'direccion@tecnolab.com.ar') {
      this.imgUser = 'assets/imagenes/MicrosoftTeams-image.png';
      this.nameUser = 'Roberto Faivovich';
      this.emailUser = 'rfaivovich@tecnolab.com.ar';
    }
  }
}
