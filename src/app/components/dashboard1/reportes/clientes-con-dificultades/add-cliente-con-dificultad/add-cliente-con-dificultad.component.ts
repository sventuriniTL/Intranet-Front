import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientesConDificultadService } from 'src/app/services/clientes-con-dificultad.service';


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
  
  form: FormGroup = new FormGroup({
    cliente: new FormControl (''),
    razonSocial: new FormControl (''),
    fecha: new FormControl (''),
    usuario: new FormControl (''),
    comentarios: new FormControl (''),

  })

 
  constructor(private fb: FormBuilder, 
    private _clienteService: ClientesConDificultadService,
    private router: Router ) { 
    this.crearFormulario();
    
  }



  ngOnInit(): void { 
    this.userMatch(this.email)
  }
  
  crearFormulario() {
    this.form = this.fb.group({
      cliente: ['',Validators.required],
      razonSocial: ['',Validators.required],
      fecha: ['',[Validators.required , Validators.minLength(10)]],
      usuario: ['',Validators.required],
      comentarios: [''],
    })
  }
  agregarUsuario(){
    const user: clienteData = {
      clI_COD: this.form.value.cliente,
      clI_NOM: this.form.value.razonSocial,
      comentarios: this.form.value.comentarios,
      fecha: this.form.value.fecha,
      usuario: this.form.value.usuario,
    }
    
    this._clienteService.addClientesCD(user).subscribe()
    
    alert('se agregó cliente correctamente');
    this.form.reset();
  }


















  private userMatch(email:string|null) {
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
