import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClientesConDificultadService } from 'src/app/services/clientes-con-dificultad.service';
import { ServiceAccionesClienteService } from 'src/app/services/service-acciones-cliente.service';


export interface clienteData {
  clI_ID: number;
  clI_NOM: string | null;
  fechaBaja: string;
  userBaja: string;

}
 

@Component({
  selector: 'app-delete-cliente-con-dificultades',
  templateUrl: './delete-cliente-con-dificultades.component.html',
  styleUrls: ['./delete-cliente-con-dificultades.component.css']
})


export class DeleteClienteConDificultadesComponent implements OnInit {



  form: FormGroup = new FormGroup({
    clI_ID: new FormControl(''),
    clI_NOM: new FormControl(''),
    fechaBaja: new FormControl(''),
    userBaja: new FormControl(''),
  })
  


  constructor(private fb: FormBuilder,
    private _deleteService: ClientesConDificultadService,
    private _accionesClientes: ServiceAccionesClienteService,
    private _snackBar: MatSnackBar) {
    this.crearFormulario();

  }
  i = this._accionesClientes.clientesArray.indexOf('clI_ID')
  j = this._accionesClientes.clientesArray.indexOf('clI_NOM')
  clI_ID= this._accionesClientes.clientesArray[this.i]
  clI_NOM= this._accionesClientes.clientesArray[this.j]
      

  ngOnInit(): void {
    this.crearFormulario()
  }

  crearFormulario() {
    this.form = this.fb.group({
      clI_ID: [{value:this.clI_ID, disabled:true}, Validators.required],
      clI_NOM: [{value:this.clI_NOM, disabled:true}, Validators.required],
      fechaBaja: ['', [Validators.required]],
      userBaja: ['', Validators.required],

    })
    console.log(this.form)
  }
  deleteCliente() {
    
    const user: clienteData = {
      
      clI_ID: this._accionesClientes.clientesArray[this.i],
      clI_NOM: this._accionesClientes.clientesArray[this.j],
      fechaBaja: this.form.value.fechaBaja,
      userBaja: this.form.value.userBaja,
    }
   
    if (this.form.invalid == true) {
      this.error();
    } else {
      
      this.succes();
      this._deleteService.deleteClientesCD(user).subscribe();
    }
  }
  error() {
    this._snackBar.open('Faltan completar campos!!!', 'ÒwÓ', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }
  succes() {
    this._snackBar.open('se agregó correctamente!', ':D', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
    this.form.reset()
  }

}
