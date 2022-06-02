import { FormGroup, FormBuilder, Validators, FormArray, FormControl, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Component } from '@angular/core';


const arrayDeRutas = [
  'dashboardAdmin',
  'dashBoard'
];
const arrayDeMails = [
  'administracion@tecnolab.com.ar',
  'direccion@tecnolab.com.ar'
];



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email!: string;
  password!: string;


  forma: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')

  });

  constructor(private router: Router,
              private fb: FormBuilder)
              {
                this.crearFormulario();
              }
  
  crearFormulario() {
    this.forma = this.fb.group({
      email  : ['', [ Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)] ],
      password  : ['', [ Validators.required, Validators.minLength(6) ]  ]
  });
  }

  login() {
    if ( this.forma.invalid ){
      // if ( this.forma.status === 'PENDING' || 'INVALID' )  {
        return Object.values( this.forma.controls ).forEach( control => {
          if ( control instanceof FormGroup ) {
            Object.values( control.controls ).forEach( control => control.markAsTouched()); 
          } else {
            control.markAsTouched();
          }
          return this.forma.invalid;
        });       
      } else {  

        var emailUser = this.forma.getRawValue().email
        this.enrutador(emailUser)  

      }
  }

  enrutador(emailUser:string){
    var emailList = arrayDeMails 
    var rutas = arrayDeRutas
    for(let i = 0; i<emailList.length; i++){
    this.asignadorDeRuta(emailUser, emailList, i, rutas);
    }

    }
  private asignadorDeRuta(emailUser: string, emailList: string[], i: number, rutas: string[]) {
    if (emailUser == emailList[i]) {
    let ruta = rutas[i];
    this.router.navigate(['/' + ruta]);
    }
  }
}

 