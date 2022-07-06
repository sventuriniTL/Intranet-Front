import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ClientesConDificultadService } from 'src/app/services/clientes-con-dificultad.service';
import { ServiceAccionesClienteService } from 'src/app/services/service-acciones-cliente.service';
import { SidebarService } from 'src/app/services/sidebar.service';
import { SidenavManagerService } from 'src/app/services/sidenav-manager.service';
import { AddClienteConDificultadComponent } from '../add-cliente-con-dificultad/add-cliente-con-dificultad.component';
import { ClientesConDificultadesComponent } from '../clientes-con-dificultades.component';

export interface clienteData {
  comentarios: string;
}
@Component({
  selector: 'app-edit-clientes-con-dificultades',
  templateUrl: './edit-clientes-con-dificultades.component.html',
  styleUrls: ['./edit-clientes-con-dificultades.component.css']
})
export class EditClientesConDificultadesComponent implements OnInit {
  email = localStorage.getItem("email");
  imgUser!: string;
  nameUser!: string;
  emailUser!: string;
  loading = false;

  form: FormGroup = new FormGroup({
    comentarios: new FormControl('')
  })


  constructor(private _snackBar: MatSnackBar, private fb: FormBuilder,
    private _clienteService: ClientesConDificultadService,
    private _accionesCliente: ServiceAccionesClienteService,
    private router: Router,
    private ui: SidebarService) {
    this.crearFormulario()
  }


  ngOnInit(): void {
  this.userMatch(this.email)
  }

  public reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  } 

  public dato:any = {
    comentario: this._accionesCliente.clienteData
  }
    public crearFormulario() {
    this.form =  this.fb.group({
      comentarios: [ this.dato , Validators.required],
    })
    console.log('HOLA DESDE ACA '  + this.dato.comentario)
  }
 
  editarUsuario() {
    this.ui.open('sidebar-2')
    const user: clienteData = {
    comentarios: this.form.value.comentarios,
    }
  }

  
  cerrar() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false
      this.ui.close('sidebar-2')
      this.reloadCurrentRoute()
    }, 1000)
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
      horizontalPosition: 'center',
      verticalPosition: 'top'
    })
  }
  succes() {
    this._snackBar.open('se agregó correctamente!', '😄👍', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    })
    this.form.reset()
  }


  userMatch(email: string | null) {
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

