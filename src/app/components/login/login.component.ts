import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/app-routing.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email!: string;
  password!: string;

  constructor(private router:Router) { }

  userLog = {
   email: this.email,
   password: this.password
  }
  
  login() {
    this.userLog.email = this.email;
    this.userLog.password = this.password;
    
    console.log(this.email);
    console.log(this.password);
    console.log(this.userLog);
    
    if (this.userLog.email === 'direccion') {
      this.router.navigate(['/dashBoard'])
    }
    else if (this.userLog.email === 'administracion') {
      this.router.navigate(['/dashboardAdmin'])
    }
    else{
      this.router.navigate(['/blanco'])
    }
    
}
  
}
 