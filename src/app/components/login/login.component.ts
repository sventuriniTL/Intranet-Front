import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


const arrayDeRutas = [
  'home',
  'home'
];
const arrayDeMails = [
  'administracion@tecnolab.com.ar',
  'direccion@tecnolab.com.ar'
];

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loading = false;
  forma: FormGroup = new FormGroup({
  email: new FormControl(''),
  password: new FormControl('')
  });

  constructor(private router: Router,
              private fb: FormBuilder,
              private _snackBar: MatSnackBar,
              )
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
            control.markAsTouched()
          }
          this.error();
          return this.forma.invalid;
        });       
      } else {  
        
        this.enrutador(this.forma.value.email)  
        localStorage.setItem("email",this.forma.value.email)
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
    this.fakeLoading(ruta);
    }
  }

  error(){
    this._snackBar.open('Usuario o contraseña invalidos',':(',{
      duration:5000,
      horizontalPosition: 'center',
      verticalPosition:'bottom'
    })
  }
  fakeLoading(ruta){
    this.loading = true;
    setTimeout(() => {
      this.router.navigate([ruta]);
      this.loading = false
      
    }, 1500)
  }
}

 