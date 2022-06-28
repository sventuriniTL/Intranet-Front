import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ClientesConDificultadService } from 'src/app/services/clientes-con-dificultad.service';
import { ServiceAccionesClienteService } from 'src/app/services/service-acciones-cliente.service';
import { ClientesConDificultadesComponent } from '../clientes-con-dificultades.component';


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



  constructor(private fb: FormBuilder,
    private _deleteService: ClientesConDificultadService,
    private _accionesClientes: ServiceAccionesClienteService,
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<DeleteClienteConDificultadesComponent>,
    public router: Router,
    @Inject(MAT_DIALOG_DATA) public message: string,
  ) {
    this.crearFormulario();

  }

  form: FormGroup = new FormGroup({
    clI_ID: new FormControl(''),
    clI_NOM: new FormControl(''),
    fechaBaja: new FormControl(''),
    userBaja: new FormControl(''),
  })

  dateNow: Date = new Date();
  dateNowISO = this.dateNow.toISOString();


  ngOnInit(): void {
  }

  crearFormulario() {
    this.form = this.fb.group({
      clI_ID: { value: '', disabled: true },
      clI_NOM: { value: '', disabled: true },
      fechaBaja: [this.dateNowISO, [Validators.required]],
      userBaja: ['test', Validators.required],
    })
    console.log(this.dateNowISO)
  }

  deleteCliente() {

    const user: clienteData = {

      clI_ID: this._accionesClientes.id,
      clI_NOM: this._accionesClientes.nom,
      fechaBaja: this.form.value.fechaBaja,
      userBaja: this.form.value.userBaja,
    }

    if (this.form.invalid == true) {
      alert('Error en el formulario')
    } else {
      this.succes();
      //this._deleteService.deleteClientesCD(user).subscribe();
      this.reloadCurrentRoute()

    }
  }
  succes() {
    this._snackBar.open('se eliminó correctamente!', '❌👌', {
      duration: 5000,
      horizontalPosition: 'left',
      verticalPosition: 'bottom'
    })
    this.form.reset()
  }
  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }
}
