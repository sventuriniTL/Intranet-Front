import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

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

  userLog = {
   email: this.email,
   password: this.password
  }
  
  crearFormulario() {

    this.forma = this.fb.group({
      email  : ['', [ Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)] ],
      password  : ['', [ Validators.required, Validators.minLength(6) ]  ]

  });
  }



  login() {
    // this.userLog.email = this.email;
    // this.userLog.password = this.password;

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
        
       
      } else  {
        
          console.log(this.email);
          console.log(this.password);
          console.log(this.userLog);
          this.router.navigate(['/dashBoard']);
      }

  }
}
 